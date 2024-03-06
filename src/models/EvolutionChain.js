// import React from "react";
// import Help from "./Help";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// class EvolutionChain {
//     static getBaseForm(mon, speciesData) {
//         if (mon.evoFromId === 0) {
//             return mon;
//         }
//         const prevMon = Help.findInArray(mon.evoFromId, speciesData);
//         return this.getBaseForm(prevMon, speciesData);
//     }

//     static makeLinks(mon, speciesData, id, setSelectedMonId) {
//         const handleSelect = () => {
//             setSelectedMonId(mon.id)
//         }
//         const nextLinks = mon.evoTo.map((link, index) => {
//             const nextMon = Help.findInArray(link.nextMonId, speciesData);
//             const nextLinks = this.makeLinks(nextMon, speciesData, id);
//             return (
//                 <div className="center" key={index}>
//                     <div className="" style={{ textAlign: "center" }}>
//                         <div>{link.method}</div>
//                         <FontAwesomeIcon
//                             icon={faArrowRightLong}
//                             color="black"
//                         />
//                         <div>{link.condition}</div>
//                     </div>
//                     <div>{nextLinks}</div>
//                 </div>
//             );
//         });

//         return (
//             <div className="center" key={mon.id}>
//                 {/* <Link to={`/${id}/pokedex/${mon.id}/0`}> */}
//                     <img src={mon.spriteUrl} alt={`Sprite of ${mon.name}`} onClick={handleSelect}/>
//                 {/* </Link> */}
//                 <div
//                     className="justify-around"
//                     style={{ flexDirection: "column" }}
//                 >
//                     {nextLinks}
//                 </div>
//             </div>
//         );
//     }

//     static makeLine(mon, speciesData, hackId, setSelectedMonId) {
//         const baseMon = this.getBaseForm(mon, speciesData);
//         return this.makeLinks(baseMon, speciesData, hackId, setSelectedMonId);
//     }
// }

// export default EvolutionChain;
