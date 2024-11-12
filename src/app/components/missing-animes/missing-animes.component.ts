import {Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MyAnimeListService} from 'src/app/services/my-anime-list/my-anime-list.service';
import {AnimeDetail} from 'src/app/shared/interfaces/my-anime-list/anime-detail';
import {AnimeListEntry} from 'src/app/shared/interfaces/my-anime-list/anime-list';

@Component({
	selector: 'app-missing-animes',
	templateUrl: './missing-animes.component.html',
	styleUrls: ['./missing-animes.component.css'],
})
export class MissingAnimesComponent {
	selectedRelationTypes = {
		prequel: {checked: true, value: 'prequel'},
		sequel: {checked: true, value: 'sequel'},
		alternative_setting: {checked: false, value: 'alternative_setting'},
		alternative_version: {checked: false, value: 'alternative_version'},
		side_story: {checked: false, value: 'side_story'},
		parent_story: {checked: false, value: 'parent_story'},
		summary: {checked: false, value: 'summary'},
		full_story: {checked: false, value: 'full_story'},
		other: {checked: false, value: 'other'},
	} as any;

	selectedAnimeTypes = {
		tv: {checked: true, value: 'tv'},
		movie: {checked: true, value: 'movie'},
		ova: {checked: false, value: 'ova'},
		special: {checked: false, value: 'special'},
		ona: {checked: false, value: 'ona'},
		music: {checked: false, value: 'music'},
		unknown: {checked: false, value: 'unknown'},
	} as any;

	selectedAnimeStatuses = {
		finished_airing: {checked: true, value: 'finished_airing'},
		currently_airing: {checked: true, value: 'currently_airing'},
		not_yet_aired: {checked: false, value: 'not_yet_aired'},
	} as any;

	animeList: AnimeListEntry[] = [];
	missingAnime: AnimeDetail[] = [];
	scannedAnimesIDs: number[] = [];

	curScanningState = {
		curScanningAnime: {} as AnimeListEntry,
		curIndex: 0,
		total: 0,
	};
	dataSource = new MatTableDataSource<AnimeDetail>([]);
	@ViewChild(MatSort)
	sort: MatSort = new MatSort();

	constructor(private myAnimeList: MyAnimeListService) {}

	test() {
		var anime: AnimeDetail;
		this.myAnimeList.getAnimeDetails(52211).subscribe((returnVal) => {
			console.log(returnVal);
			anime = returnVal;
			//this.missingAnime.push(returnVal);
			// this.dataSource.data = this.missingAnime;
			this.checkAnimeForCompletion(52211);
		});
	}

	resetValues() {
		this.animeList = [];
		this.missingAnime = [];
		this.scannedAnimesIDs = [];
		this.dataSource = new MatTableDataSource<AnimeDetail>([]);
	}

	getUserAnimeList() {
		this.resetValues();
		this.myAnimeList.getAnimeList('EddyZuefflingen').subscribe((returnVal) => {
			this.animeList = returnVal.data;

			this.curScanningState.total = this.animeList.length;

			this.animeList.forEach((element) => {
				this.curScanningState.curIndex++;
				this.curScanningState.curScanningAnime = element;

				this.checkAnimeForCompletion(element.node.id);
			});
		});
	}

	checkAnimeForCompletion(animeID: number) {
		if (this.scannedAnimesIDs.find((e) => e == animeID) == undefined) {
			this.scannedAnimesIDs.push(animeID);

			this.myAnimeList.getAnimeDetails(animeID).subscribe((returnAnime) => {
				if (this.missingAnime.find((e) => e.id == returnAnime.id) == undefined && this.animeList.find((e) => e.node.id == returnAnime.id) == undefined) {
					Object.keys(this.selectedAnimeTypes).forEach((key) => {
						if (this.selectedAnimeTypes[key].value === returnAnime.media_type && this.selectedAnimeTypes[key].checked) {
							Object.keys(this.selectedAnimeStatuses).forEach((key) => {
								if (this.selectedAnimeStatuses[key].value === returnAnime.status && this.selectedAnimeStatuses[key].checked) {
									this.missingAnime.push(returnAnime);
									this.dataSource = new MatTableDataSource<AnimeDetail>(this.missingAnime);
									this.dataSource.sort = this.sort;
								}
							});
						}
					});
				}

				returnAnime.related_anime.forEach((relAnime) => {
					Object.keys(this.selectedRelationTypes).forEach((key) => {
						if (this.selectedRelationTypes[key].value === relAnime.relation_type && this.selectedRelationTypes[key].checked) {
							this.checkAnimeForCompletion(relAnime.node.id);
						}
					});
				});
			});
		}
	}
}
