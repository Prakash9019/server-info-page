import React, { useState, useEffect } from "react";
import { ServerHeader } from "./ServerHeader";
import { ServerSetting } from "./ServerSetting";

export default function ServerInfo() {
  const [serverSettings, setServerSettings] = useState([]);
  const [serverAdv, setServerAdv] = useState([]);
  const [serverRules, setServerRules] = useState([]);
  const [serverInfo, setServerInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch server data from backend API
    async function fetchServerData() {
      try {
        const response = await fetch("http://localhost:5000/api/server-info"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setServerSettings(data.settings);
        setServerAdv(data.advanced);
        setServerRules(data.rules);
        setServerInfo(data.info);
      } catch (err) {
        console.error(err);
        setError("Failed to load server information.");
      } finally {
        setLoading(false);
      }
    }

    fetchServerData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-start -mr-px max-md:max-w-full">
      <ServerHeader />

      
      <div className="flex flex-wrap gap-10 mt-20 ml-5 max-w-full text-4xl font-semibold text-white tracking-[2.16px] w-[833px] max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0a9c7419b979f3ff0ed10dde3cb34fdf97def722590e81df19f04563e7cceac?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
          className="object-contain shrink-0 self-start mt-2 w-10 aspect-[0.83]"
          alt=""
        />
        <div className="flex-auto w-[716px] max-md:max-w-full">
          #1| NASA | Noobs Welcome | Conquest 40Hz
        </div>
      </div>
      <div className="flex flex-wrap gap-10 items-start mt-2 max-w-full w-[1293px]">
        <div className="flex flex-col items-end mt-2 w-[61px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c7a9d8bf1573cdf45f72a716a855c8ca523ad60143bc301e441c1a7e9a3876b?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
            className="object-contain w-10 aspect-[0.83]"
            alt=""
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/371ddba3f4b96c71816dfaadb1b93810e63d3655b0099543365580ff144edc19?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
            className="object-contain self-stretch mt-4 w-full aspect-[1.27]"
            alt=""
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/706f8d1b936cc1f01e881d05239de16208307e4965dbd3c594944f83e8ec99d0?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
            className="object-contain mt-4 w-10 aspect-[0.83]"
            alt=""
          />
        </div>
        <div className="flex flex-col grow shrink-0 items-start text-lg font-semibold tracking-wider text-white basis-0 w-fit max-md:max-w-full">
          <div className="flex flex-wrap gap-2 uppercase">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b8c5d8aab354a4718f342467b5f5048365e0cd2a7dd7c9ef84df69a0f66b052?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
              className="object-contain shrink-0 my-auto w-4 rounded-none aspect-[2]"
              alt=""
            />
            <div className="flex-auto opacity-80 max-md:max-w-full">
              conquest large - siege of shanghai - normal - 40 hz
            </div>
          </div>
          <div className="mt-3.5 tracking-wide opacity-80 max-md:max-w-full">
            Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
            Request, Appeal, Visit us: www.epg.gg | Discord
            <br />
            https://discord.gg/3r5NK4d
          </div>
          <div className="flex flex-wrap gap-2 self-stretch mt-9 uppercase max-md:max-w-full">
            <button className="px-16 py-4 border border-white border-solid max-md:px-5">
              join
            </button>
            <button className="px-16 py-4 border border-white border-solid max-md:px-5">
              spectate
            </button>
            <button className="px-16 py-4 border border-white border-solid max-md:px-5">
              join as commander
            </button>
            <div className="flex gap-1 px-8 py-4 border border-white border-solid max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f253982c8a5c390408bebb8dbe4cf1289b55587600c6b7756902e5d42feaa37?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
                className="object-contain shrink-0 self-start aspect-[1.04] fill-white w-[23px]"
                alt=""
              />
              <div>13672</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5 ml-5 max-w-full w-[1137px]">
        <div className="flex flex-wrap gap-10 items-start self-stretch w-full max-md:max-w-full">
          <div className="flex flex-col">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fc3020dccc91ee9f8b0291c3963c79d3f36ee2e4113dbfb708f1b425b3e04b4?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
              className="object-contain w-10 aspect-square"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/17b00281272e359bdc689c86dddf21bbe3e35a7ba5160bf937475ca4ce076dfc?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
              className="object-contain mt-7 w-8 aspect-[0.97] max-md:mr-1"
              alt=""
            />
            <div className="flex shrink-0 mt-8 w-8 h-4 bg-white max-md:mr-1" />
            <div className="flex shrink-0 mt-1 w-8 h-1 bg-white max-md:mr-1" />
            <div className="flex shrink-0 mt-1 w-8 h-1 bg-white max-md:mr-1" />
          </div>
          <div className="flex gap-5 justify-between max-w-full text-3xl font-semibold tracking-widest whitespace-nowrap w-[286px]">
                    <div>64/64</div>
                    <div>47ms</div>
              </div>



          <div className="flex-auto mt-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                {/* <div className="flex flex-col w-full text-base font-medium tracking-wider text-white max-md:mt-7"> */}
                  
              {/* 1 */}
              <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full text-white">
                  <div className="self-start mt-7 ml-4 text-lg font-semibold tracking-widest uppercase max-md:ml-2.5">
                    SETTINGS
                  </div>
                  {serverSettings ? ( Object.entries(serverSettings).map(([key, value]) => ( <ServerSetting key={key} label={key} value={value} /> )) ) : ( <p>empty</p> )}
                </div>

                <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full text-white">
                  <div className="self-start mt-7 ml-4 text-lg font-semibold tracking-widest uppercase max-md:ml-2.5">
                    ADVANCE
                  </div>
                  {/* {console.log(setServerAdv)} */}
                  {serverAdv ? ( Object.entries(serverAdv).map(([key, value]) => ( <ServerSetting key={key} label={key} value={value} /> )) ) : ( <p>empty</p> )}
                </div>


                <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full text-white">
                  <div className="self-start mt-7 ml-4 text-lg font-semibold tracking-widest uppercase max-md:ml-2.5">
                    RULES
                  </div>
                  {serverRules ? ( Object.entries(serverRules).map(([key, value]) => ( <ServerSetting key={key} label={key} value={value} /> )) ) : ( <p>empty</p> )}
                </div>

              {/* </div> */}
              </div>
              </div>
              </div>
       
        <div className="shrink-0 mt-1.5 h-px bg-white border border-white border-solid opacity-10" />
        <div className="shrink-0 mt-1.5 h-px bg-white border border-white border-solid opacity-10" />

      </div>
    </div>
  );
}
