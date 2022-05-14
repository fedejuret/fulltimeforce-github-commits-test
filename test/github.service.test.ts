import dotenv from 'dotenv';
import { GitHubService } from '../src/services/github.service';

dotenv.config();

test('should be an array of commits', async () => {
    
  const gitHubService = new GitHubService();
  const commits = await gitHubService.getCommits();

  expect(commits).toBeInstanceOf(Array);
});
