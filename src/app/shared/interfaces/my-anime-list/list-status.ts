export interface ListStatus {
	status: string;
	score: number;
	num_watched_episodes?: number;
	is_rewatching: boolean;
	updated_at: Date;
	num_episodes_watched?: number;
}

