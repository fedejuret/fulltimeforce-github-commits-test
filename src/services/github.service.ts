import { ErrorException } from "../exceptions/error.exception";
import { Commit, Convert } from "../models/commit";
import axios, { Axios } from "axios";

export class GitHubService {
  private readonly _http: Axios;
  private readonly _repo: string;
  private readonly _owner: string;

  constructor() {
    if (typeof process.env.GITHUB_API_URL === "undefined") {
      throw new ErrorException("GITHUB_API_URL is undefined", 500);
    }

    if (typeof process.env.GITHUB_REPO === "undefined") {
      throw new ErrorException("GITHUB_REPO is undefined", 500);
    }

    if (typeof process.env.GITHUB_OWNER === "undefined") {
      throw new ErrorException("GITHUB_OWNER is undefined", 500);
    }

    if(typeof process.env.ACCESS_TOKEN === "undefined") {
      throw new ErrorException("ACCESS_TOKEN is undefined", 500);
    }

    this._repo = process.env.GITHUB_REPO;
    this._owner = process.env.GITHUB_OWNER;

    this._http = axios.create({
      baseURL: process.env.GITHUB_API_URL,
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.ACCESS_TOKEN
      },
    });
  }

  async getCommits(): Promise<Commit[]> {
    const response = await this._http.get(
      `/repos/${this._owner}/${this._repo}/commits`
    );

    return response.data.map((commit: any) => {
      return Convert.toCommit(JSON.stringify(commit));
    });
  }
}
