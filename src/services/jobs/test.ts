import { getJobs } from "./jobService";

async function run() {
  const jobs = await getJobs();

  console.log(jobs.slice(0, 3));
}

run();
