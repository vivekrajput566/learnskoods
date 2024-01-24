export async function fetchJobsData() {
    // console.log("hi");
  
    try {
    //   console.log("inside try");
      const res = await fetch('https://learnkoodsapi.onrender.com/jobs_api/',
      { method: "GET", cache: "no-cache" }
      );
      
      if (!res.ok) {
        console.error("Failed to fetch data:", res.status, res.statusText);
        return null;
      }
  
      const data = await res.json();
    //   console.log("data from fetch", data);
      return data;
    } catch (error) {
      console.error("Error during fetch:", error);
      return null;
    }
  }