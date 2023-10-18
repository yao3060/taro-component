import "./SwiperIndicator.scss";
import { View } from "@tarojs/components";
import { CSSProperties, useEffect, useRef, useState } from "react";
import Taro from "@tarojs/taro";

function SwiperIndicator({
  current,
  total,
  isFullWidth = false
}: {
  current: number;
  total: number;
  isFullWidth?: boolean
}) {
  const componentId = useRef<string>(
    "swiper-indicator-" +  Math.random().toFixed(5).replace('.', '')
  );
  const [width, setWidth] = useState("100vw");
  useEffect(() => {
    if(isFullWidth) return;
    setTimeout(() => {
      Taro.createSelectorQuery()
        .select(`#${componentId.current}`)
        .boundingClientRect(function(rect) {
          console.log("SwiperIndicator", rect);
          setWidth(rect.width + "px");
        })
        .exec();
    }, 0);
  }, []);

  return (
    <View id={`${componentId.current}`} className="swiper-indicator">
      <View
        style={
          {
            "--indicator-width": `calc(${width} / ${total})`,
            width: `var(--indicator-width)`,
            transform: `translateX(calc(var(--indicator-width) * ${current}))`
          } as CSSProperties
        }
        className="active"
      ></View>
    </View>
  );
}

export default SwiperIndicator;
