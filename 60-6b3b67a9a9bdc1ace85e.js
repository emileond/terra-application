(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1422:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=n(909),i=a(n(903)),s=function(){return o.default.createElement(r.WorkspaceContent,{label:"Continents"},o.default.createElement(i.default,{tab:"continents"}))};s.titleKey="derp";var l=s;t.default=l},1423:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=n(909),i=a(n(903)),s=function(){return o.default.createElement(r.WorkspaceContent,{label:"Countries"},o.default.createElement(i.default,{tab:"countries"}))};s.titleKey="derp";var l=s;t.default=l},1424:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=n(909),i=a(n(903)),s=function(){return o.default.createElement(r.WorkspaceContent,{label:"Cities"},o.default.createElement(i.default,{tab:"cities"}))};s.titleKey="derp";var l=s;t.default=l},1425:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=n(909),i=a(n(903)),s=function(){return o.default.createElement(r.WorkspaceContent,{label:"Landmarks"},o.default.createElement(i.default,{tab:"landmarks"}))};s.titleKey="derp";var l=s;t.default=l},1426:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=n(909),i=a(n(903)),s=function(){return o.default.createElement(r.WorkspaceContent,{label:"Languages"},o.default.createElement(i.default,{tab:"languages"}))};s.titleKey="derp";var l=s;t.default=l},1427:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=n(909),i=a(n(903)),s=function(){return o.default.createElement(r.WorkspaceContent,{label:"Currencies"},o.default.createElement(i.default,{tab:"currencies"}))};s.titleKey="derp";var l=s;t.default=l},1547:function(e,t,n){"use strict";var a=n(4),o=n(10);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(54)),i=a(n(0)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(a,i,s):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(909)),l=a(n(906)),d=a(n(1422)),h=a(n(1423)),u=a(n(1424)),c=a(n(1425)),f=a(n(1426)),p=a(n(1427)),m=a(n(929)),g=a(n(47)),w=a(n(309));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}var b={small:"320px",medium:"500px",large:"1000px"},v=function(){var e=i.default.useState("tab-1"),t=(0,r.default)(e,2),n=t[0],a=t[1],o=i.default.useState("large"),y=(0,r.default)(o,2),v=y[0],E=y[1],k=i.default.useRef({pageKey:"page-1",pageLabel:"Test Page",pageMetaData:{data:"data here"}}),T=function(e){E(e)};return i.default.createElement("div",{style:{background:"linear-gradient(180deg, rgba(248,247,248,1) 0%, rgba(222,221,222,1) 100%)",display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",height:"100%"}},i.default.createElement("h1",{style:{fontSize:"26px",margin:"2rem 0 1.5rem 0"}},"Option 1 Prototype"),i.default.createElement(g.default,{href:"./tabs-home",text:"Back",icon:i.default.createElement(w.default,null),variant:"ghost",style:{position:"fixed",top:"32px",left:"32px"}}),i.default.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"32px",padding:"12px",borderRadius:"8px",boxShadow:"inset 0px 1px 2px 0px rgba(0,0,0,0.25)",background:"#ebeaeb"}},i.default.createElement("span",{tabIndex:0,style:{textAlign:"left",marginRight:"12px",fontWeight:"bold"}},"Adjust Viewport Size"),i.default.createElement(m.default,{id:"controlled-button-group",selectedKeys:[v]},i.default.createElement(m.default.Button,{text:"Large",key:"large",onClick:function(){return T("large")}}),i.default.createElement(m.default.Button,{text:"Medium",key:"medium",onClick:function(){return T("medium")}}),i.default.createElement(m.default.Button,{text:"Small",key:"small",onClick:function(){return T("small")}}))),i.default.createElement(l.default.Provider,{value:k.current},i.default.createElement("div",{style:{height:"70vh",width:b[v],boxShadow:"0px 0px 15px 0px rgba(0,0,0,0.2)"}},i.default.createElement(s.default,{id:"overlay-test-id",dismissButtonIsVisible:!0,isPresentedAsOverlay:!0,activeItemKey:n,onRequestActivate:function(e){return a(e)},activeSize:v,sizeOptions:[{key:"small",text:"Small"},{key:"medium",text:"Medium"},{key:"large",text:"Large"}],onRequestSizeChange:T,onRequestDismiss:function(){console.log("onRequestClose")}},i.default.createElement(s.WorkspaceItem,{itemKey:"tab-1",label:"Continents",render:function(){return i.default.createElement(d.default,null)}}),i.default.createElement(s.WorkspaceItem,{itemKey:"tab-2",label:"Countries",render:function(){return i.default.createElement(h.default,null)}}),i.default.createElement(s.WorkspaceItem,{itemKey:"tab-3",label:"Cities",render:function(){return i.default.createElement(u.default,null)}}),i.default.createElement(s.WorkspaceItem,{itemKey:"tab-4",label:"Landmarks",render:function(){return i.default.createElement(c.default,null)}}),i.default.createElement(s.WorkspaceItem,{itemKey:"tab-5",label:"Languages",render:function(){return i.default.createElement(f.default,null)}}),i.default.createElement(s.WorkspaceItem,{itemKey:"tab-6",label:"Currencies",render:function(){return i.default.createElement(p.default,null)}})))))};t.default=v},903:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(3)),i=a(n(922)),s=a(n(923)),l=r.default.bind(s.default),d=function(e){var t=e.tab,n=i.default[t];return o.default.createElement("div",{className:l("content-container"),dangerouslySetInnerHTML:{__html:n}})};t.default=d},922:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n(0));var o={continents:'<p>What actually is a continent, and how many are there?</p>\n  <h2>What does the dictionary say?</h2>\n  <p>\n    Continent, noun, [ˈkɒn.tɪ.nənt] one of the seven large landmasses on the\n    Earth\'s surface, surrounded, or mainly surrounded, by sea and usually\n    consisting of various countries.\n  </p>\n  <h2>The Continents</h2>\n  <p>\n    Africa, the Americas, Antarctica, Asia, Australia, together with Oceania,\n    and Europe are considered to be continents.\n  </p>\n  <p>\n    The word continent is used to differentiate between various large land\n    areas of Earth into which all the land surface of the planet is divided.\n    The term refers to the \'mountain top\' regions of the Earth not flooded by\n    water, dry land. The level of the surrounding water ultimately defines the\n    shape and borders of continents. More water implies less land and\n    different outlines. Even more water, like that stored away as ice in the\n    poles and glaciers, and you might live on a water planet, no continents.\n  </p>\n  <p>\n    All right, then, a continent is "a large, continuous area of land on\n    Earth." All continents of the Earth together make up about one-third of\n    the total surface of the planet. The fact is, more than two-thirds of the\n    Earth\'s surface is covered by water. The landmasses of the Earth are\n    unequally distributed, two-thirds of the continental landmass is located\n    in the Northern Hemisphere (the upper half of the globe, north of the\n    equator). Why is that? This might be just a feature of our current point\n    in geological time because some million years ago, the bulk of the\n    planet\'s landmass was in the Southern Hemisphere.\n  </p>\n  <p>Go to:</p>\n  <ul>\n      <li><a href="https://www.nationsonline.org/oneworld/continents.htm#Africa">Africa</a></li>\n      <li><a href="https://www.nationsonline.org/oneworld/continents.htm#Americas">The Americas</a></li>\n      <li><a href="https://www.nationsonline.org/oneworld/continents.htm#Asia">Asia</a></li>\n      <li><a href="https://www.nationsonline.org/oneworld/continents.htm#Oceania">Australia / Oceania</a></li>\n      <li><a href="https://www.nationsonline.org/oneworld/continents.htm#Europe">Europe</a></li>\n      <li><a href="https://www.nationsonline.org/oneworld/continents.htm#Antarctica">Antarctica</a></li>\n      <li><a href="https://www.nationsonline.org/oneworld/continents.htm#LandOcean">Land and Ocean</a></li>\n      <li><a href="https://www.nationsonline.org/oneworld/continents.htm#Formation">Formation of Continents</a></li>\n      <li><a href="https://www.nationsonline.org/oneworld/continents.htm#NewContinents">New Continents</a></li>\n      <li><a href="https://www.nationsonline.org/oneworld/continents.htm#HowmanyContinents">How Many Continents?</a></li>\n  </ul>',countries:'<h2>Countries by Continents</h2>\n  <h3>Asia</h3>\n  <p>Includes 50 countries, and it is the most populated continent, the 60% of the total population of the Earth live\n      here.</p>\n  <h3>Africa</h3>\n  <p>Comprises 54 countries. It is the hottest continent and home of the world\'s largest desert, the Sahara, occupying the\n      25% of the total area of Africa.</p>\n  <h3>North America</h3>\n  <p>Includes 23 countries led by the USA as the largest economy in the world.</p>\n  <h3>South America</h3>\n  <p>Comprises 12 countries. Here is located the largest forest, the Amazon rainforest, which covers 30% of the South\n      America total area.</p>\n  <h3>Europe</h3>\n  <p>Includes 51 countries, and it is the second most populated continent, the second largest after Asia.</p>\n  <h3>Australia</h3>\n  <p>Includes 14 countries. It is the least populated continent after Antarctica, only 0.2% of the total Earth population\n      live here.</p>\n  <h3>Antarctica</h3>\n  <p>Is the coldest continent in the world, completely covered with ice. There are no permanent inhabitants, except of\n      scientists maintaining research stations in Antarctica.</p>\n      <h3>Countries by Continents</h3>\n      <p>Listed by Continents, the countries, population and the capital cities.</p>\n      <ul>\n          <li><a href="https://www.nationsonline.org/oneworld/africa.htm">Africa</a></li>\n          <li><a href="https://www.nationsonline.org/oneworld/america.htm">The Americas</a></li>\n          <li><a href="https://www.nationsonline.org/oneworld/asia.htm"></a>Asia</li>\n          <li><a href="https://www.nationsonline.org/oneworld/europe.htm">Europe</a></li>\n          <li><a href="https://www.nationsonline.org/oneworld/oceania.htm">Australia / Oceania</a></li>\n      </ul>\n      <h3>Travel</h3>\n      <p>Tourism Destinations by various categories.</p>\n      <ul>\n          <li><a href="https://www.nationsonline.org/oneworld/travel_destinations.html">World\'s Top Travel Destinations</a></li>\n          <li><a href="https://www.nationsonline.org/oneworld/travel_warning.htm">World Travel Warnings</a></li>\n      </ul>\n      <h3>First, Second and Third World</h3>\n      <p>A list of states of the first, second and the third world, with an explanation of the terms.</p>\n      <ul>\n          <li><a href="https://www.nationsonline.org/oneworld/first.htm">Countries of the "First World"</a></li>\n          <li><a href="https://www.nationsonline.org/oneworld/second.htm">Countries of the "Second World"</a></li>\n          <li><a href="https://www.nationsonline.org/oneworld/third_world.htm">Countries of the "Third World"</a></li>\n      </ul>',cities:'<h2>The global geography of world cities</h2>\n  <p>What are termed ‘world’ cities or ‘global’ cities command and control the world economy, and are centres for\n      transnational corporations (TNCs). They are mostly among the world’s wealthy cities; if not, they are at least among\n      the wealthiest in their nation.</p>\n  <p>Global cities play a key role in the world economy – but the playing field is increasingly unequal. Most cities are\n      not able to engage seriously in global or regional contests for corporate headquarters. Some may be able to attract\n      investment in production, especially where wages are very low. But being far from major trunk transport,\n      communications and other infrastructure prevent them from genuinely competing. </p>\n  <p>There are many lists that rank cities by indicators – such as gross domestic product (GDP), GDP per capita or housing\n      affordability. Cities are also ranked using composite indicators measuring, for instance, business environment or\n      quality of life (or subsets of this). Some lists relate more directly to ‘global’ or ‘world’ city economies.</p>\n  <p>Here, we look at four of these lists – cities ranked by:</p>\n  <ul>\n      <li>Their concentration of advanced producer services (accountancy, advertising, banking/finance, law)</li>\n      <li>Their number of TNC headquarters and their size and economic performance</li>\n      <li>Scores on global financial services, and</li>\n      <li>A composite indicator including scores on business activity, human capital, information exchange, cultural\n          experience and political engagement.</li>\n  </ul>\n  <p>The table below presents lists of the top 20 cities, ranked under these categories.</p>\n  <table>\n      <thead style="font-weight: bold;">\n          <tr>\n              <th>Rank</th>\n              <th>Advanced producer services</th>\n              <th>TNC headquarters</th>\n              <th>Global financial services</th>\n              <th>Global cities</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>1</td>\n              <td>New York<i>&nbsp;</i></td>\n              <td>Beijing</td>\n              <td>New York</td>\n              <td>New York</td>\n          </tr>\n          <tr>\n              <td>2</td>\n              <td>London</td>\n              <td>New York</td>\n              <td>London</td>\n              <td>London</td>\n          </tr>\n          <tr>\n              <td>3</td>\n              <td>Paris</td>\n              <td>Tokyo</td>\n              <td>Hong Kong</td>\n              <td>Tokyo</td>\n          </tr>\n          <tr>\n              <td>4</td>\n              <td>Hong Kong</td>\n              <td>London</td>\n              <td>Singapore<i>&nbsp;</i></td>\n              <td>Paris</td>\n          </tr>\n          <tr>\n              <td>5</td>\n              <td>Tokyo</td>\n              <td>Paris</td>\n              <td>Shanghai</td>\n              <td>Hong Kong<i>&nbsp;</i></td>\n          </tr>\n          <tr>\n              <td>6</td>\n              <td>Los Angeles</td>\n              <td>San Jose</td>\n              <td>Tokyo</td>\n              <td>Chicago</td>\n          </tr>\n          <tr>\n              <td>7</td>\n              <td>Singapore</td>\n              <td>San Francisco<i>&nbsp;</i></td>\n              <td>Beijing<i>&nbsp;</i></td>\n              <td>Los Angeles<i>&nbsp;</i></td>\n          </tr>\n          <tr>\n              <td>8</td>\n              <td>Frankfurt</td>\n              <td>Seoul<i>&nbsp;</i></td>\n              <td>Dubai</td>\n              <td>Singapore</td>\n          </tr>\n          <tr>\n              <td>9</td>\n              <td>Milan</td>\n              <td>Hong Kong<i>&nbsp;</i></td>\n              <td>Shenzhen<i>&nbsp;</i></td>\n              <td>Sydney</td>\n          </tr>\n          <tr>\n              <td>10</td>\n              <td>Sydney</td>\n              <td>Washington, DC</td>\n              <td>Sydney<i>&nbsp;</i></td>\n              <td>Seoul</td>\n          </tr>\n          <tr>\n              <td>11</td>\n              <td>Brussels</td>\n              <td>Toronto</td>\n              <td>Toronto</td>\n              <td>Brussels</td>\n          </tr>\n          <tr>\n              <td>12</td>\n              <td>San Francisco</td>\n              <td>Dallas</td>\n              <td>San Francisco</td>\n              <td>San Francisco<i>&nbsp;</i></td>\n          </tr>\n          <tr>\n              <td>13</td>\n              <td>Washington, DC</td>\n              <td>Chicago</td>\n              <td>Los Angeles</td>\n              <td>Washington DC</td>\n          </tr>\n          <tr>\n              <td>14</td>\n              <td>Madrid</td>\n              <td>Zurich</td>\n              <td>Zurich</td>\n              <td>Toronto<i>&nbsp;</i></td>\n          </tr>\n          <tr>\n              <td>15</td>\n              <td>Toronto</td>\n              <td>Moscow</td>\n              <td>Frankfurt<i>&nbsp;</i></td>\n              <td>Beijing<i>&nbsp;</i></td>\n          </tr>\n          <tr>\n              <td>16</td>\n              <td>Zurich</td>\n              <td>Houston<i>&nbsp;</i></td>\n              <td>Chicago</td>\n              <td>Berlin<i>&nbsp;</i></td>\n          </tr>\n          <tr>\n              <td>17</td>\n              <td>Moscow</td>\n              <td>Shanghai</td>\n              <td>Paris</td>\n              <td>Madrid<i>&nbsp;</i></td>\n          </tr>\n          <tr>\n              <td>18</td>\n              <td>Mexico City</td>\n              <td>Stockholm</td>\n              <td>Boston</td>\n              <td>Vienna</td>\n          </tr>\n          <tr>\n              <td>19</td>\n              <td>Chicago</td>\n              <td>Munich</td>\n              <td>Melbourne</td>\n              <td>Boston</td>\n          </tr>\n          <tr>\n              <td>20</td>\n              <td>São Paulo</td>\n              <td>Minneapolis</td>\n              <td>Montreal<i>&nbsp;</i></td>\n              <td>Frankfurt<i>&nbsp;</i></td>\n          </tr>\n      </tbody>\n  </table>',landmarks:"<h2>Most Famous Landmarks and Cultural Monuments in the World</h2>\n  <p>Everybody knows the most famous landmarks in the world, you can name it, or?\n      Anyhow, on the next pages you will find some, if not all, most famous landmarks and monuments around the world, as\n      well as some, not everybody knows.\n      Each of these cultural icons is a symbol with various meanings, it may represent an epoch, an area, a belief, a\n      culture, a country or a city.</p>\n  <h3>Eiffel Tower in France</h3>\n  <p>This metal tower with three floors stands in the city centre of Paris. It was built for the 1889 World Fair\n      (Universal Expo) to celebrate the 100th anniversary of the French Revolution.</p>\n  <p>The 324metres/1062ft high Eiffel Tower was constructed by Auguste Eiffel and a team of engineers. If you would like\n      to take the steps up to the tower viewing platform on the second floor, there are 704 steps to climb, but luckily\n      there are also lifts in each of the leg up to the second floor.</p>\n      <h3>Great Wall of China</h3>\n      <p>The Great Wall is one of the seven wonders of the world. It runs in sections over a very long distance across China.</p>\n      <p>The wall is also referred to as ‘Long Wall’ as it is over 21,196 km/13,171 miles long. It was built with stones, bricks and tiles, earth as well as of wooden material. The wall was completed in 1644, but it took more than 2,000 years to build.</p>\n      <h3>Kremlin in Russia</h3>\n      <p>The Grand Kremlin Palace is part of the Kremlin complex and is located next to the Red Square and St Basil’s Cathedral in Russia’s capital city Moscow.</p>\n      <p>The Kremlin is a fortress with enclosing walls and is built along the Moskva River. The name ‘Kremlin’ means ‘fortress within a city’. The more than 500-year-old Kremlin includes the wall with its 20 towers as well as four churches and five palaces within the walls.</p>\n      <h3>Leaning Tower of Pisa in Italy</h3>\n      <p>The Leaning Tower of Pisa is one of Italy’s major tourist attractions. The freestanding bell tower of the Pisa Cathedral was built over almost two hundred years and was finished in 1399.</p>\n      <p>The original hight of the tower was 60 meters/196ft, but as it is leaning, the lowest side is now less than 56 meters/184ft. The construction already caused many problems as the soil was soft, sandy and unstable. Already during construction, the builders tried to balance the leaning side with more columns on the other side, but the tower still leaned - like many other buildings in the area.</p>\n      <h3>Great Pyramid of Giza in Egypt</h3>\n      <p>The Great Pyramid of Giza near Cairo is one of the Seven Wonders of the Ancient World and the only one of these ancient world wonders which still exists. The pyramids are made of stone and bricks and stand near Cairo which is the capital of Egypt.</p>\n      <p>The Egyptian pyramids were built during a time when there was only manual labour and no machine lifting equipment available. The pyramids were build to house the bodies of the pharaoh who ruled in ancient Egypt. Next to the Giza pyramids there is the Sphinx, the famous monument of a lion body with a pharaoh’s head.</p>\n      <h3>Sydney Opera House in Australia</h3>\n      <p>The Sydney Opera House, built in Australia’s biggest city, is famous for its roof’s architecture resembling shells or sails. The opera house was designed by Jørn Utzon from Denmark and it was built between 1959 and 1973.</p>\n      <p>The roof is covered with more than 1 million roof tiles. These were manufactured in Sweden. The opera house has several performance halls and theatre and exhibition spaces.</p>\n      <h3>Statue of Liberty in New York</h3>\n      <p>The Statue of Liberty is 92 meters/ 305 ft high and is made of a iron structure with copper skin.</p>\n      <p>Lady Liberty, as the statue often is referred to, was designed by Frederic Auguste Bartholdi and the massive iron skeleton of the lady was designed by Alexandre Gustave Eiffel who also designed the Eiffel Tower.</p>\n      <p>The monument stands on Liberty Island in the Hudson River facing New York City. You can climb up the 154 steps from the pedestal to the head of the statue where you can see the fantastic views over the ‘Big Apple’ as New York is often lovingly called. </p>\n      <h3>Taj Mahal in India</h3>\n      <p>The Taj Mahal, which means 'crown of palaces' in the Persian language, stands on the riverbanks of the Yamuna River in Agra in northern India. </p>\n      <p>In 1632 the emperor, Shah Jahan instructed to build a tomb for his favorite wife, Mumtaz Mahal. The Taj Mahal houses the tomb of the wife as well as a mosque and a guesthouse.</p>\n      <h3>Moai on Easter Island/Chile</h3>\n      <p>The Moai are huge statues on the Polynesian island Rapa Nui. The island is commonly called Easter Island and belongs to Chile. The Easter Island is more than 2,200 miles away from Chile in the middle of the Pacific Ocean.</p>\n      <p>The islanders created more than 900 carved stone figures between 1250 and 1500. Most of the stone figures with the oversized heads were built with tuff stone and compressed volcanic ash.</p>\n      <p>There are more than 900 monumental statues and 300 ceremonial platforms which are sacred to the Rapa Nui people.</p>\n      <h3>Machu Picchu in Peru</h3>\n      <p>Machu Picchu which means ‘Old Mountain’ in the local Quechua language is a famous site in Peru. It is also referred to as 'The Lost City of the Incas'.</p>\n      <p>The ruins of the Lost City are located in the mountains, at more than 2,400 metres/8,000 feet above sea level. This ruin site has more than 200 different buildings and structures. The ruins were never discovered by the European conquistadors but only became known in 1911 when an American archeologist was led to the site by locals.</p>",languages:'<h2>Languages of the World</h2>\n  <p>Language is the specifically human capacity for acquiring and using complex systems of acoustic as well as kinesic signals to express thoughts and feelings, and language is used for the exchange of knowledge and experiences.</p>\n  <p>The problem on this planet is the language systems vary greatly from region to region. The variety may be so different that one individual does not understand the language of a member from another region or country.</p>\n  <table class="tb86">\n      <tbody><tr>\n      <td colspan="6" style="background-color:#BDCEE7"><b>Geographic Distribution of Living Languages (2009)</b></td>\n      </tr>\n      <tr>\n      <td style="width:134px; background-color:#EEE">&nbsp;</td>\n      <td style="width:126px; background-color:#EEE; text-align:right">Total Living Languages</td>\n      <td style="width:72px; background-color:#EEE; text-align:right">Percentage</td>\n      <td style="width:13px; background-color:#EEE">&nbsp;</td>\n      <td style="width:165px; background-color:#EEE; text-align:right">Number of speakers</td>\n      <td style="width:312px; background-color:#EEE">&nbsp;</td>\n      </tr>\n      <tr>\n      <td style="width:134px">\n      Countries in Africa</td>\n      <td style="text-align:right">2,110</td>\n      <td style="text-align:right">30.5 %</td>\n      <td>&nbsp;</td>\n      <td style="text-align:right">726,453,403</td>\n      <td>&nbsp;</td>\n      </tr>\n      <tr style="background-color:#EEE">\n      <td style="background-color:#FFF">\n      Countries in the Americas and the Caribbean</td>\n      <td style="text-align:right">993</td>\n      <td style="text-align:right">14.4 %</td>\n      <td>&nbsp;</td>\n      <td style="text-align:right">50,496,321</td>\n      <td>&nbsp;</td>\n      </tr>\n      <tr>\n      <td style="width:134px">\n      Countries in Asia</td>\n      <td style="text-align:right">2,322</td>\n      <td style="text-align:right">33.6 %</td>\n      <td>&nbsp;</td>\n      <td style="text-align:right">3,622,771,264</td>\n      <td>&nbsp;</td>\n      </tr>\n      <tr style="background-color:#EEE">\n      <td style="background-color:#FFF">\n      Countries in Australia/Pacific</td>\n      <td style="text-align:right">1,250</td>\n      <td style="text-align:right">18.1 %</td>\n      <td>&nbsp;</td>\n      <td style="text-align:right">6,429,788</td>\n      <td>&nbsp;</td>\n      </tr>\n      <tr>\n      <td style="width:134px">\n      Countries in Europe</td>\n      <td style="text-align:right">234</td>\n      <td style="text-align:right">3.4 %</td>\n      <td>&nbsp;</td>\n      <td style="text-align:right">1,553,360,941</td>\n      <td>&nbsp;</td>\n      </tr>\n      <tr style="background-color:#EEE">\n      <td style="background-color:#FFF">Total<br>\n      &nbsp;</td>\n      <td style="text-align:right">6,909</td>\n      <td style="text-align:right">100 %</td>\n      <td>&nbsp;</td>\n      <td style="text-align:right">5,959,511,717</td>\n      <td>&nbsp;</td>\n      </tr>\n      <tr>\n      <td colspan="6">Source: <a href="https://www.ethnologue.com/" rel="nofollow" target="_top">Ethnologue</a><br>\n      &nbsp; </td>\n      </tr>\n      </tbody></table>\n  ',currencies:"<p>Currency, is a system of money in general use in a particular country at a specific time.</p>\n  <p>Below you will find a list of money in use for each country around the world, as well as the corresponding three-character alphabetic, and the three-digit numeric ISO 4217 code for each currency.</p>\n  <h2>Major trading currencies</h2>\n  <p>In many countries around the world, the Euro and the US Dollar are the preferred foreign currencies. Other major trading currencies are: Japanese Yen (JPY), British Pound Sterling (GBP), Australian Dollar (AUD), Canadian Dollar (CAD), Swiss Franc (CHF), Chinese Yuan (Renminbi; CNY), Swedish Krona (SEK), New Zealand Dollar (NZD), and the Mexican Peso (MXN).</p>\n  <p>The U.S. Dollar and the Euro are important international reserve currencies. The US Dollar is the official currency in the US and its territories; it is also used in several countries outside the USA as the legal tender. Countries in which the US Dollar is the official currency: East Timor, Ecuador, El Salvador, Federated States of Micronesia, Marshall Islands, Palau, Panama, and Zimbabwe. The US dollar is pegged by 27 currencies.</p>\n  <p>In 19 countries of the European Union, the Euro is the sole legal tender. Additionally, Andorra, Monaco, San Marino, and the Vatican City use the Euro as their official currency and issue their own coins. Twelve currencies are pegged to the Euro at a fixed exchange rate.</p>\n  <h2>Exchange Rates</h2>\n  <p>The exchange rate is the rate for how much money you get for your bucks or euros. In expert-speech, it is the value of one currency for the purpose of conversion to another.</p>\n  <p>The exchange rate is changing more or less on a day to day base, but not much. To get a feeling about how much your money is worth in a foreign country read up on the latest currency exchange rates, for that you may use a Currency Converter app or a service like x-rates.com.</p>",bananas:"<p>What actually is a continent, and how many are there?</p>\n  <h2>What does the dictionary say?</h2>\n  <p>\n    All right, then, a continent is \"a large, continuous area of land on\n    Earth.\" All continents of the Earth together make up about one-third of\n    the total surface of the planet. The fact is, more than two-thirds of the\n    Earth's surface is covered by water. The landmasses of the Earth are\n    unequally distributed, two-thirds of the continental landmass is located\n    in the Northern Hemisphere (the upper half of the globe, north of the\n    equator). Why is that? This might be just a feature of our current point\n    in geological time because some million years ago, the bulk of the\n    planet's landmass was in the Southern Hemisphere.\n  </p>",grapes:"<p>What actually is a continent, and how many are there?</p>\n  <h2>What does the dictionary say?</h2>\n  <p>\n    All right, then, a continent is \"a large, continuous area of land on\n    Earth.\" All continents of the Earth together make up about one-third of\n    the total surface of the planet. The fact is, more than two-thirds of the\n    Earth's surface is covered by water. The landmasses of the Earth are\n    unequally distributed, two-thirds of the continental landmass is located\n    in the Northern Hemisphere (the upper half of the globe, north of the\n    equator). Why is that? This might be just a feature of our current point\n    in geological time because some million years ago, the bulk of the\n    planet's landmass was in the Southern Hemisphere.\n  </p>"};t.default=o},923:function(e,t,n){"use strict";n.r(t),t.default={"content-container":"TestStyles-module__content-container___2KoT0"}}}]);