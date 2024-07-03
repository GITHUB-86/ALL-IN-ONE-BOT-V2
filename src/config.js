require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "MTI1NjEwMTEzNTc1NjgyMDUxMA.GpOogr.We-cWRqTvig03poetO1HxixvW_tSx1wuEnerkw",
        clientID: process.env.CLIENT_ID || "1256101135756820510", 
            prefix: process.env.PREFIX || "!", 
                ownerID: process.env.OWNER_ID || "1198883915826475080",
                    guildID: process.env.GUILD_ID || "1256099293102739526",
                        SpotifyID: process.env.SPOTIFY_ID || "885d14890b9942af98adab2d2c9b14a7",
                            SpotifySecret: process.env.SPOTIFY_SECRET || "52585f30ac0a4f45a1116f34a5538f5c",
                                mongourl: process.env.MONGO_URL || "mongodb+srv://RUBY:hGcYVsZDaQ27NoMJ@ruby-bot.f644sib.mongodb.net/?retryWrites=true&w=majority&appName=RUBY-BOT",
                                    embedColor: process.env.EMBED_COLOR || 0xcc0000,
                                        logs: process.env.LOGS || "",
                                            logs1: process.env.LOGS1 || "",
                                                errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "1256245882773442753",
                                                    buglogschannel: process.env.BUG_LOGS_CHANNEL || "1256245882773442753",
                                                        SearchPlatform: "youtube",
                                                            AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER ||"youtube ,youtube music,youtube,soundcloud",
                                                                links: {
                                                                        img: process.env.IMG || 'https://discord.com/channels/1247444478512336896/1247444478713659421/1254450678152167425', 
                                                                                support: process.env.SUPPORT || 'https://discord.gg/coderplanet',
                                                                                        invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=1200011771151396864&permissions=279205464384&scope=applications.commands%20bot' 
                                                                                            },
                                                                                                nodes: [
                                                                                                           {
                                                                                                                       host: process.env.NODE_HOST || "ambani.ncop.tech",
                                                                                                                                   port: parseInt(process.env.NODE_PORT || "2334"),
                                                                                                                                               password: process.env.NODE_PASSWORD || "ambaniop",
                                                                                                                                                           secure: parseBoolean(process.env.NODE_SECURE || "false"),
                                                                                                                                                                       }
                                                                                                                                                                                  ],

                                                                                                                                                                                  }


                                                                                                                                                                                  function parseBoolean(value) {
                                                                                                                                                                                      if (typeof (value) === 'string') {
                                                                                                                                                                                              value = value.trim().toLowerCase();
                                                                                                                                                                                                  }
                                                                                                                                                                                                      switch (value) {
                                                                                                                                                                                                              case true:
                                                                                                                                                                                                                      case "true":
                                                                                                                                                                                                                                  return true;
                                                                                                                                                                                                                                          default:
                                                                                                                                                                                                                                                      return false;
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                          }