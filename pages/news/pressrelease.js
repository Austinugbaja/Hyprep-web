import React from "react";
import { NewsCard2 } from "../../components/NewsCard2";
import MainLayout from "../../layout/MainLayout";

const NewsletterPage = () => {
  return (
    <MainLayout>
      <div>
        <section className="sm:py-10 sm:px-20 py-10 px-10 w-full sm:h-[551px] h-[275px] bg-backgroundDark flex flex-col justify-center items-start text-white">
          <div className="text-left">
            <h3 className="uppercase text-sm mb-5 text-textLightGreen font-semibold">
              press release
            </h3>
            <h2 className="text-3xl font-merriweather font-bold pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              labore.
            </h2>
            <p></p>
          </div>
        </section>
        <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center text-black">
          <div className="text-left">
            <h2 className="text-3xl font-merriweather font-bold pb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
              ipsum?
            </h2>
            <p className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              ab harum reiciendis magnam vero ipsam voluptas iusto quod sunt
              illum? Similique dignissimos fuga reprehenderit exercitationem
              enim sed impedit est quam.
            </p>
          </div>
        </section>
        <section className="sm:py-12 sm:px-[140px] px-[30px] items-center justify-center w-full bg-white flex flex-col">
          <div
            className="sm:w-[1155px] sm:h-[372px] w-full h-[50vw] bg-noContent rounded-2xl "
            // style={{
            //   background: `url(${post?.image_one})`,
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "cover",
            // }}
          ></div>
        </section>
        <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center text-black">
          <p className="text-left mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod
            consequuntur reprehenderit optio. Voluptatem soluta libero delectus?
            At, quo laudantium quasi cumque eveniet reiciendis, ipsa magnam
            architecto nemo obcaecati nesciunt?
          </p>
          <section className="items-start justify-start w-full pb-6 bg-white flex flex-col">
            <div
              className="sm:w-[355px] sm:h-[472px] w-full h-[50vw] bg-noContent rounded-2xl"
              // style={{
              //   background: `url(${post?.image_two})`,
              //   backgroundPosition: "center",
              //   backgroundRepeat: "no-repeat",
              //   backgroundSize: "cover",
              // }}
            ></div>
          </section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi
            similique dolorum unde consequatur, odio sunt hic cum fuga eum id
            explicabo sint autem quam nam repellendus deleniti? Quibusdam,
            dicta?
          </p>
        </section>
        <section className="sm:py-10 sm:px-[140px] pb-10 py-10 px-[30px] w-full bg-white flex flex-col items-center">
          <div className="text-center mb-10">
            <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
              RELATED NEWS ARTICLES
            </h3>
            <h2 className="text-3xl font-merriweather font-bold pb-6">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit.
            </h2>
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default NewsletterPage;
