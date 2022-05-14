import express, { Request, Response } from "express";
import { GitHubService } from "../services/github.service";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const githubService = new GitHubService();

  const commits = await githubService.getCommits();

  res.render("index", {
    "title": "GitHub Commits &mdash; FullTimeForce Test",
    commits,
  });
});

export default router;
