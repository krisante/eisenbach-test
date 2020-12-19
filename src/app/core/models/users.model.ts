export interface UserDetails {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar?: string;
    job?: string;
}

export interface Support {
    url: string;
    text: string;
}

export interface SingleUserDetails {
    data: UserDetails;
    support?: Support;
}

export interface UserList {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Array<UserDetails>;
    support?: Support;
}

export interface UserCreationDetails {
    name: string;
    job?: string;
}

export interface UserRegistrationDetails {
    email: string;
    password: string;
}