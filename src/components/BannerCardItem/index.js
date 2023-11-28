// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={`${className}`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button">Show More</button>
      </div>
    </li>
  )
}
export default BannerCardItem
