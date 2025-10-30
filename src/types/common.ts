export interface PaginationMeta{
    total:number;
    per_page:number;
    page:number;
    last_page?:number;
}

export interface PaginatedResult<T>{
    data:T[];
    meta?:PaginationMeta;
}