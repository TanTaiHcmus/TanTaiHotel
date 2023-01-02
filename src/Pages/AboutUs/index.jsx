import React, { PureComponent } from "react";
import Banner from "../../Components/Banner";
import { appPages } from "../../constants";
import { withAppPages } from "../../HOC/withAppPages";
import aboutUsBanner from "../../Images/about-main.jpg";
import "./index.scss";

const aboutUsItems = [
  {
    title: "Trải nghiệm",
    content:
      "“Tan Tai Hotel” ra đời với sứ mệnh trở thành chuỗi khách sạn đầu tiên áp dụng những công nghệ tiên tiến hàng đầu vào quy trình phục vụ khách hàng đặc biệt là “sự riêng tư tuyệt đối” cho khách hàng khi đến với Tan Tai Hotel. Tan Tai Hotel mang sự đảm bảo cho khách hàng một trải nghiệm vô cùng tuyệt vời khi tin tưởng đến với Tan Tai Hotel.",
  },
  {
    title: "Trang thiết bị hiện đại",
    content:
      "Khi đến với Tan Tai Hotel, khách hàng sẽ cảm nhận được sự sang trọng, sự tân tiến của các trang thiết bị hiện đại tại đây bao gồm dàn đèn sáng tự động, phòng cách âm, máy lọc không khí, nệm hơi nước, và cùng một số trang thiết bị hiện đại nhất hiện nay.",
  },
  {
    title: "Vẻ đẹp",
    content:
      "Với vẻ đẹp trong các gian phòng hiện đại của chúng tôi, Tan Tai Hotel còn mang theo vẻ đẹp và sự sang trọng theo phong cách phương Tây, cùng với đó là một một không gian vô cùng tuyệt vời, thoáng mát, thanh khiết khi xung quanh là những cảnh vật thiên nhiên đầy thơ mộng, hữu tình như trong phim, rất phù hợp với những khách hàng yêu thích vẻ đẹp thiên nhiên và hít thở không khí trong lành và tận hưởng vẻ đẹp tuyệt vời này.",
  },
];

class AboutUs extends PureComponent {
  render() {
    return (
      <div className="about-us-container">
        <Banner title={appPages.AboutUs.name} bannerImage={aboutUsBanner} />
        <div className="about-us-content">
          {aboutUsItems.map((item, index) => (
            <div className="about-us-item" key={index}>
              <div className="title">{item.title}</div>
              <div className="content">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withAppPages(AboutUs, appPages.AboutUs.id);
