import {AlternativeTitles} from './alternative-titles';
import {Broadcast} from './broadcast';
import {Genre} from './genre';
import {MainPicture} from './main-picture';
import {ListStatus} from './list-status';
import {Picture} from './picture';
import {Recommendation} from './recommendation';
import {RelatedAnime} from './related-anime';
import {StartSeason} from './start-season';
import {Statistics} from './statistics';
import {Studio} from './studio';

export interface AnimeDetail {
	id: number;
	title: string;
	main_picture: MainPicture;
	alternative_titles: AlternativeTitles;
	start_date: string;
	end_date: string;
	synopsis: string;
	mean: number;
	rank: number;
	popularity: number;
	num_list_users: number;
	num_scoring_users: number;
	nsfw: string;
	created_at: string;
	updated_at: string;
	media_type: string;
	status: string;
	genres: Genre[];
	my_list_status: ListStatus;
	num_episodes: number;
	start_season: StartSeason;
	broadcast: Broadcast;
	source: string;
	average_episode_duration: number;
	rating: string;
	pictures: Picture[];
	background: string;
	related_anime: RelatedAnime[];
	related_manga: any[];
	recommendations: Recommendation[];
	studios: Studio[];
	statistics: Statistics;
}

