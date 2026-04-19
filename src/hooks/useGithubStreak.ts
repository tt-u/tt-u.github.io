import { useState, useEffect } from "react";
import fetchGitHubStreak from "../utils/fetchGitHubStreak";

interface GithubStreakData {
  streak: number;
  loading: boolean;
}

const useGithubStreak = (username: string): GithubStreakData => {
  const [streak, setStreak] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const fetchedStreak: number = await fetchGitHubStreak(username);
        setStreak(fetchedStreak);
      } catch (error) {
        console.error("Failed to fetch GitHub streak:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [username]);

  return { streak, loading };
};

export default useGithubStreak;
