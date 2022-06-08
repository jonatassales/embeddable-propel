import './App.css';
import 'time-series-chart'

function App() {
  return (
    <div className="App">
      <time-series-chart 
        metric="netflixReleasesByDate" 
        account="ACT01G4NG8JYDP24VJP6PC8CJFS36"
        environment="ENV01G4NG8K0107VGG26CPBMR9C0C"
        accessToken="eyJraWQiOiJKNUlxYzVpZ0NsVWR3Mmc3QVdBK3ArVHJmRmxYZFQyeTRZWThRWk5iejlvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4MjJiOGVlMi0xN2Q5LTQ2ODEtODgyNC04NWE4MjkyMTFkNjIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9RQVJWY0VraHYiLCJjbGllbnRfaWQiOiI2MWVlMmRqNThlNjhuNGg3cXRtbmJpaWFsNSIsIm9yaWdpbl9qdGkiOiIzYzQwNGNmYS05OTgxLTQxOWUtYTg5Zi02ZjY4Njc4Y2MyNzQiLCJldmVudF9pZCI6IjM4OTE1ZDE2LWFkOTgtNDJkNC05NjA3LTEwYmU1MWMyOTY1ZiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQyODY4ODEsImV4cCI6MTY1NDczMDg3NiwiaWF0IjoxNjU0NzI3Mjc2LCJqdGkiOiI5NDhjM2ZmNC0xOTJlLTQxYjMtYWJmMS00OTI1ZGY1YjU0ODgiLCJ1c2VybmFtZSI6IjgyMmI4ZWUyLTE3ZDktNDY4MS04ODI0LTg1YTgyOTIxMWQ2MiJ9.JICtj_QYpzm2Eb63F0lz4UmdjJXzmtmW9jH8SiMxfarpm4pstr3g44KFOTmGDGsFssC8Qe1a73ZMUscwaEJMCO0Wsi2dg8O1HVtKcztniryRAbpn1lLvmn3_tBCf6AK_TM5kdEE_yFgBlMf4-7DF_i-n8OHgL6bZ1E6GG-hYRLxbbo8uXM_Gk_PVMcCnXnCj4BFBxwLseLp98NK_QVgbnNiKUt5qf-5KW3rtbk93A9kdPSuA7rH0g3_sMEmBV59rZLi-Dk4fCrSApf1adrrnHyFd080xE4DZxky2Blmm9idMp_0zrRy9i9dYG_T9a4LAe3bxW08TjKVOD5lLRqNWFg"
        color="#61dafb"
      />
    </div>
  );
}

export default App;
