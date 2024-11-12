import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {AnimeDetail} from 'src/app/shared/interfaces/my-anime-list/anime-detail';
import {AnimeList} from 'src/app/shared/interfaces/my-anime-list/anime-list';
import {ErrorHandlerService} from 'src/app/shared/services/error-handler.service';
import {environment} from 'src/app/environment/environment';

@Injectable({
	providedIn: 'root',
})
export class MyAnimeListService {
	//Läuft über Proxy. Richtige URL die angesprochen wird, ist in der "proxy.conf.json"
	private ApiUrl: string = 'http://localhost:4200/api';
	private clientAuthHttpOptions = {
		headers: new HttpHeaders({
			'X-MAL-CLIENT-ID': environment.myAnimeListClientID,
		}),
	};

	constructor(private http: HttpClient, private errHandler: ErrorHandlerService) {}

	public getAnimeDetails(animeID: number): Observable<AnimeDetail> {
		return this.http
			.get<AnimeDetail>(`${this.ApiUrl}/anime/${animeID}?fields=related_anime,media_type,status,start_date,mean`, this.clientAuthHttpOptions)
			.pipe(catchError(this.errHandler.handleError<AnimeDetail>(`anime/${animeID}`)));
	}

	public getAnimeList(userName: string): Observable<AnimeList> {
		return this.http
			.get<AnimeList>(`${this.ApiUrl}/users/${userName}/animelist?fields=list_status,media_type,status,start_date,mean&limit=1000`, this.clientAuthHttpOptions)
			.pipe(catchError(this.errHandler.handleError<AnimeList>(`anime/${userName}/animelist`)));
	}
}
