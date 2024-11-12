import {ListStatus} from './list-status';
import {Node} from './node';

export interface AnimeList {
	data: AnimeListEntry[];
	paging: Paging;
}

export interface AnimeListEntry {
	node: Node;
	list_status: ListStatus;
}

export interface Paging {
	next: string;
}
