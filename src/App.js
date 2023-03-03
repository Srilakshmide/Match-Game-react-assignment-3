import Gallery from './Components/Gallery'
import './App.css'

// Replace your code here
// class App extends Component {
//   state = {
//     isTrue: false,
//     category: 'FRUIT',
//     score: 0,
//     time: 60,
//     imgUrl: imagesList[0].imageUrl,
//   }

//   componentDidMount() {
//     this.timerId = setInterval(this.statusChange, 1000)
//   }

//   statusChange = () => {
//     const {time} = this.state
//     if (time !== 0) {
//       this.setState(prevState => ({time: prevState.time - 1}))
//     } else {
//       clearInterval(this.timerId)
//       this.setState({isTrue: true})
//     }
//   }

//   clickTab = tabId => {
//     this.setState({category: tabId})
//   }

//   imageClick = thumbnailUrl => {
//     const {imgUrl, isTrue} = this.state
//     const imageValue = imagesList.filter(
//       eachImg => eachImg.thumbnailUrl === thumbnailUrl,
//     )
//     const {imageUrl} = imageValue[0]
//     if (imageUrl === imgUrl) {
//       const newImgUrl =
//         imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl
//       console.log(newImgUrl)
//       this.setState(prevState => ({
//         score: prevState.score + 1,
//         imgUrl: newImgUrl,
//       }))
//     } else {
//       clearInterval(this.timerId)
//       this.setState((isTrue: true))
//     }
//   }

//   playAgain = () => {
//     this.setState({
//       score: 0,
//       imgUrl: imagesList[0].imageUrl,
//       category: 'FRUIT',
//       time: 60,
//     })
//     this.timerId = setInterval(this.statusChange, 1000)
//   }

//   render() {
//     const {isTrue, category, score, time, imgUrl} = this.state
//     const thumbnailList = imagesList.filter(
//       eachValue => eachValue.category === category,
//     )
//     return (
//       <div className="main-container">
//         <nav className="nav-bar">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
//             className="top-image"
//             alt="website logo"
//           />
//           <ul className="score-div">
//             <li className="score-name">
//               <p>
//                 Score: <span className="score">{score}</span>
//               </p>
//             </li>
//             <li className="score-div">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
//                 alt="timer"
//                 className="timer-img"
//               />
//               <p className="time">{time} sec</p>
//             </li>
//           </ul>
//         </nav>
//         <div className="content-div">
//           {!isTrue && (
//             <div className="first-div">
//               <img src={imgUrl} className="big-image" alt="match" />
//               <ul className="tab-elements">
//                 {tabsList.map(eachValue => (
//                   <li key={eachValue.tabId}>
//                     <button
//                       type="button"
//                       className={`tab-button ${
//                         category === eachValue.tabId ? 'highlight-text' : ''
//                       }`}
//                       onClick={() => this.clickTab(eachValue.tabId)}
//                     >
//                       {eachValue.displayText}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//               <ul className="thumbnail-images">
//                 {thumbnailList.map(eachObject => (
//                   <li key={eachObject.id}>
//                     <button
//                       type="button"
//                       className="image-button"
//                       onClick={() => this.imageClick(eachObject.thumbnailUrl)}
//                     >
//                       <img
//                         src={eachObject.thumbnailUrl}
//                         className="thumbnail-image"
//                         alt="thumbnail"
//                       />
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {isTrue && (
//             <div className="second-div">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
//                 className="trophy-image"
//                 alt="trophy"
//               />
//               <p className="main-heading">YOUR SCORE</p>
//               <p className="your-score">{score}</p>
//               <button
//                 type="button"
//                 className="play-button"
//                 onClick={this.playAgain}
//               >
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
//                   className="restart"
//                   alt="reset"
//                 />
//                 PLAY AGAIN
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     )
//   }
// }

const App = () => <Gallery />

export default App
