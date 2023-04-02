import React from "react"
import ContentLoader from "react-content-loader"

import style from "./ProductItem.module.scss"

const ProductItemSkeleton: React.FC = () => (
  <ContentLoader 
    className={style.item}
    speed={2}
    width={300}
    height={400}
    viewBox="0 0 320 500"
    backgroundColor="#f7f7f7"
    foregroundColor="#ededed"
  >
    <rect x="0" y="0" rx="5" ry="5" width="320" height="300" /> 
    <rect x="0" y="310" rx="5" ry="5" width="200" height="30" /> 
    <rect x="0" y="350" rx="5" ry="5" width="320" height="23" /> 
    <rect x="0" y="380" rx="5" ry="5" width="320" height="63" /> 
    <rect x="0" y="460" rx="5" ry="5" width="115" height="40" />
  </ContentLoader>
)

export default ProductItemSkeleton