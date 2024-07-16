export interface IGithubProfile {
    id: string;
    username: string;
    emails: { value: string }[];
}