import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Sauces.css";
import { Button } from "antd";
import { Footer } from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Sauces = () => {
  let [data, setData] = useState([]);
  let [makesomething, setMakeSomething] = useState([]);
  let navigate = useNavigate();
  let getData = () => {
    axios
      .get("http://localhost:8080/sauces")
      .then((res) => {
        // data = res.data;
        setData(res.data);
        // console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  let getSomething = () => {
    axios
      .get("http://localhost:8080/makeSomething")
      .then((res) => {
        console.log(res.data);
        setMakeSomething(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
    getSomething();
  }, []);
  window.scrollTo(0, 0); // to scroll the page at the top whenever page loads

  let handleViewAll = () => {
    navigate("/viewAll");
  };
  // let handleDetails = (item) => {
  //   navigate(`${item.id}/organic_details`);
  //   // console.log(item)
  // };

  return (
    <>
      <Navbar />
      <ScrollToTop smooth />
      <div className="main_organic_div">
        <div className="child_organic_div">
          <h1>ORGANIC SAUCES & MARINADES</h1>
          <p>
            Enjoy our Coco Amino Sauces and Marinades with all your favorite
            dishes. Better for you seasoning sauces and marinades that are
            gluten free, soy free, vegan, lower sodium than soy sauce, with no
            refined sugars and Whole30 Approved. Each can be used as a marinade,
            cooking sauce or as a finishing sauce on nearly any protein,
            vegetable, noodle dish or stir fry.
          </p>
        </div>
        <div className="organic_div">
          {data.map((item, index) => {
            return (
              <div key={index} className="child_div1">
                {/* <div style={{height:"500px", width:"100%", margin:"auto"}}> */}
                <img src={item.image} alt="image" className="organic_image" />
                <h1>{item.title}</h1>
                {/* </div> */}
                <Button
                  type="primary"
                  className="details_btn"
                  onClick={() => handleDetails(item)}
                >
                  Details
                </Button>
              </div>
            );
          })}
        </div>
        <div className="unrefined_div">
          <div className="brewed_div">
            <h1>Brewed in Small Batches...</h1>
            <h4>
              We brew this savory sauce in small batches from Nira, the nectar
              of the coconut blossom harvested by hand by our collective of
              organic farmers in Indonesia.
            </h4>
          </div>
          <div className="unrefined_img_div">
            <div>
              <img
                src="data:image/png;base64,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"
                alt="ice cube"
              />
              <h3>Soy Free</h3>
            </div>
            <div>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAk1BMVEX////4rBr4qAD4pwD4qgD4qxT4qgr///3/+e////z4rAD979P6xG///fj836/70Yr+89/6wmb96Mj+9uf5v1T5u1H6wV35ukP958X4sSP82aT+8dz6x3T6wWP+9+r5tkP70pX95Lr5uk37zYH84LT70Iv5szP5tDj82J/4sCH82aH95L/7y3v5vk/+8dj82qj81Z8sWW1XAAATyUlEQVR4nO1dCXeqvBbFhEQcsCpV61BFrVKHq9///3UvJwMSSBBtC9rXvdZdlwoim+SMSU4c5w9/+MMf/vCHH4A/73ZbrVa3O/erfpTS4LcO/83+bSm6gG7/zf47tH73Ozh9zCJOlpBaEoTwVxHNPk5VP+KPYL7s1YB1zQ54A7Xecl71o34vgvPqCu8k/9U5qPqBvwuN5StCRXjH/BF6XTaqfuxvQLCpIXoDcQGKaptnb/xT77Ym1xq/98yarzW8o8mTjT9sVU3hTnR7X2Iu2Pe6VdO4A/6L+1XmnL378nQ+T2eHvoE5AO06VZO5CcHwTg1nAkHDJ1L5Z5Lf3YUPiwUMPm4alJyrplQQXi+n0RlrjMf/ZuG+s3wDLDv7cPZvzN5Bjt9HUM+rmlYRtLZWSWe8x73PN69RT32n3pi/ffbG2G4Y0PYJzN3etTQf6+bD/SnNOon6aT9ENvrE3ZfG4U4czY3OvLThuUi39c5DW9uj448//VfgDY3UCR6HxVX1hFKzwkDDBxb6YGGiTvDoo7h/4rcpCg8jbGKPFg9r7LpbQ3cleHHIE/IUTkxTok/HWRrZ0+2DurhTA3WCouUNzJ0DGDo0YUf1pcle0O30px7/KzBRp83wJm/8wI0E+uB/+GHTcMdHJG/o8Dc7oy1hH3Ff/m1yjR+w2wdRhvrNnqi3E0zx5Y2dafa20YMpPH+VEU60urWBXgVPQhIaomu68WNFtb30ExK0vjXbeJb3IIPkp41Nptuj3jc++ZexyVB3bw66PRXLoI32+SFr61JXVIqPNHU6LhZ5HBLHa3UTvExesjTFB9ISPACmtdTj0aiYqHfxRXLnbkws6bkaqbPfexBL569Suriw6/mJh/FxqJqdrBJXmKmzt/sg+m6N0s9VdEQtIjju9TtFEjxaBRt1dtX6m1nchbc09cIBh4dZ55XHrfguCet+sFJn5N++ncnN8Lb689FtYdfjgC+tvDF0+TzqNbKtPqBN9fhbtBAXcVe4AZGiiWPjmEv9EXp9y009kdYV898Dz9DwoM3x4mZvKiWWpZ762604g1cf6Do+qahYMO7m9ksuLWQHh7G4o1CezFJHi5R0DW6Jjr8fHb3Ho5l2dohzU2yiy2DoKYeYu3xbBurtxiz1a5UO2KQUHYm0dm7hmpszjOxj0Xzgnat3qLxVI3XHi/Sfq1TdhXpDUF0Cj6hGh5ZvMgRYsmrENyJESLuZeka7xAJSAeY7kvMoPpzNUUiKO/jvkrtU8jbq6aCJjKubl6Q3O1nofuYbcKPv1m8r7pQpiQm/ExW23U7d8Rd5b7tEpKTd7eunRRtRa1gzl9xJU0WCiF+bQ91x+lqvr07iJ1qzp3S8UxcDLPZYuy651/BUOMaY57hyqTuOruuFd1A+9P5Hdilf1h8T0TRWK9xUBDpOgIAifHiFuhNoLk5azsrCQW+BMHVauWqob/oyYCRZgMDvCF0AxWvU0+oOHcz3/mG8J126rOR1lQmz+t0zqr4L9pDf4Dr1lHHJ0aU/iO4VjdtSqmxr+rZfTziFiBkFF0SmAPWMdakiXa89AtllLG1fqTJq8u06TAVOE8rOL0w91fBVmLnGSnuCbMdW7W5OLH5iFvU05S1k9uYtMwpjop4Km8mq/Jm3U83Q0my0GsTtnjB+ntIKR4onMQlhqQ4FqTtTLXZ0y09bal3epHE8ZcLIIv4s2Krwnhl//CbVIeGOb9FWd2TgX2GnH2hdfpm9wFdeH9mpxu5fsjLMvhHkcbkh3CE0UO/ZevNS6/QDy1U/Bk3Lm13L2AYSqez6Lon1AkSjdAE64XbqKWe6dE2vDcXQmemSWCqko9+l5BLT8kgcT4b0DuoXz0BcWfYgjf7rRufqouj56QaMUpORPCmyEGiJ0B3UdZfS/OZ/DpovnwyjE867dOiVGufdgIzlyX/C2X8NQfndSt2Zj5M/X7JP37X5lcv9RfRjExayPwL+RzwW0eP9hmCQVRP1K2lI3Z8uV+C1wZhkcraLxxvVC07Kow+deNKhmlfAIxJyV4cHfGq/X+4QjRZMoYTT6kcU1ULZ9tIOQwivojoq+yf48vdTd07a75c7HN9L9DmyTfryrH0J2gp7L116aPd4UoW8jJ0S1Pv3UHfmSStHS52Hoak6PRfLs3QEt/n7EFNRgLsU0FjeffwV6rprV66yC5J6Vo9jpDuHxiCEAZXz5epN1UfUddGXqGvxDBmXOfNKC2RSwyNSFRCu4T6gFzBdpNRebN+dEIx+HOdebvZebKBJGxAqNZzp21QdQzfOSBxZC74gPmShHhVE0+NuHlC8n3pK2VnTYj+As5Y6SfW4thJFNGRy2Ga9eh7bJOgMKxV8WKgHRcZXA+1rZS6nSZq4TCAzjU+ihefUZzi6fIG5t0csxxst1P1hEc2lhTOlGrljrpY9auSdzfvlC6h7wLKZLNQbC9aBvav0dUtT5oqKdoI7zcTP80sKnc//nMfcSa3uEmncLNRXM6feaV73UpMD/7T9EyQtSLrTBs+igxOE+Ceyz9PZBBHugtqoD2qNfoTxdaOV9K5KTVQnPQtTCNm+6AOxwkfqOtTZXaGOuxtMaui6yCeD6LyR7m/H4IqwJTURj3SUjfvENurw+Iz6Bx9vI9ctnaZySkxbaflpo6KZJhY5gniLPAYZznA+9ReuJ0l0I/cS89T1q9whNxc/2W7u+K7o8s0c6vUBnr2gon1Y517erKMC3JPkgYqQkhak1uzU32VaoIi9roq7russxvVUiy9iIg/KTqg9O/VBIN9XkQlUx6p03fCKce2/gVm/LPdA3YDF63y40U69F88rwAWKfLSr4n7NuJ4wGm1a9VCt9KEL55XmaXhnhTdxFESaBbrwFRfj5zC7pmR7lCA8/my1ZRUAdH6zafhX/gXIYx9RcSq6qSkzS/2SjGUiw6AMj9cJQrP9egdlDVh/tziygrrD7uGrpECRsEybZohevpVdPpJp0sxEGw7p2VHUbr0dI/a/hXrCK4lH2XCBWXNBchBen8X7w1hezZoEqhEpbnty7NlC3ZfxutJe3Eu75tTqmSPDUOiPYZrkjo0jUp8xUYpCrhFallZfNcU3VEuChXu5ZuEPyZuhMnNWXY1BaLzmEmQSruas1JG4QRAPXTb8Ib4WleqTbsocmNE0jSV6DtSMEhG52anXRNimcoBo40foqqeWNO9GbftzKJIel+J9nbrIcisdgucLWiPb/OgkZ4Dgx5H0KGvEkmk442LUGV8vzn+iEFLvZJfPPdDGQsstAqIlarFNzYY4n3q8ehqCFyHBZCfav5mv6Jeaqiu36pFmYuzvPcS5re4plQASL3wGtJfjOvkirPW7kmdaaSninPGwM3QJG/V211eBLvNOeGqHDPYXKbBDn/pQ9kTyYfEXb5d1/DLfyQTuTswjwV1p5d3cPq93u3JVXcq+5k5xs1BvcOO2aw1kO/dhmRjeqzlM+fJe/Nd/Atp4mLZ0OQUDdX61JzJ4eLLhhWxo20MQzsrwjIxz9bw+n7Xskp76ci27U2mjHgfguH3aAXvsjOm44SmfPjdbqbnUJXs2AH2SmW2OvJ26mKQAH2y9zg4jvFy783jyWL4Ma5OJy55i5lweXbx7i6ptZQozJYJWVayQMM6tcLTqTxNjlnkLffVplbj8xeCpBzBmF1vZWRWJeD32jwiXWK7cXrUpeRZ0irz2H4XW6Y2xRz71y/R5pvHUkLt6oThvNoGm6Sro8qm5F6Y5bteoiwkpkqsg30j4eVbohRZKnXOhoC8Ry45E26ivonheReIOIi09V2o+L4TVlp1XtEhMTx+k5xPbqA8Qwa8y1xBcGp4gCAYV9zx35crStHKQXqWnNZVh8pikDp0Eb8TF+wR5Amk9Je72KTfaeBh7gooKe2naTh9IyqUOf+2EfkjUt6QRIyYZje1dXq82UImmA2h+LXvgi7ExUQc6g/gbBM84v0TVOyjRJQNYe6bSG2t3Lt2fjfGuN3wcxvez69xS1HnTw3N7u8s98F6Gh9iee9TLqlSzKpKjpT1IbG5s1Ee6g0tgiZxOPuAJjByHtp/6xQpLnegNTyJub2zUne4xtQEDfvchKroIwoKLkd1L9fWCFxU2e1riRa83UH9VAak3GWFedpzwWuQ44pm+Y+z1o5CRy4mIU1WPq5N2QLrqykcudYB/+G/2Gm1349HsrMbdls34NiOS48+m6uSlqw2UjLlebIiMz5lK6jH1+qn/sZm9v7ePx/XkcEqGIP7LRRrsZmuql6mHebqV4jOlv7KtPlStXn+F/i4AHT/qnfvx0883O1mB3jqo6qdKoeIyR19NaCzSZG3UGd61F8UE3iWj40F5Zv3wPQJFYEvVpep8k0XlWw+lrE4edaYeMmkcwjp7tOnHypD1ZEvsnlItldo3hUyNUjt1GKwwdBPGfzeT9Jk6M3u06Z95iFql/sK+UUKaOiyFNr4q1v/HLzzh+UplrRcdqepRNVpRgZMUTq6JTU2um0jDmxlLy0Pru7CFUuCaBiLT1HOLhJWJSUaK7dQZ+ubC+tCYaPAGabyMqs/IFa6opk8WaTWUS93hhfUNcoLYhxQt3oaENLX8Yz1z/4q9miT8kaFQ/HuOQNbf2i7WvCBm7zatd8ae0G0qRe29pqnT0UMIu0CQriXJcCVt7nVmW76pEAA3hxNo6tNM+nf4MtDTyhS2ryxZY0bWiyfXq8/788Mk3Kw3Yacft2Ow4SNUJC7gfs7st0TSBdOqRqYc9937IPmdAUY1Strgu5j2Z3qcQtwK56yyR+P7Cm3VpxsojeGulodxVouarH/VmGQfkzX9nZLJE9HUNWyvVVXFunwYyNdo7baNRmIwZybK3u5RqZt9HIK2nXvY10fGPeUex6dJ42zaB4qgaHKr0vMmxkYnJc8muwmWXQLQ9qaNboPN1riZFnHLnC99M1pjY1BHUO39UKzxvcN7zbyNWNFNLCpDkN0PRj452rYP11o/OLS3ts3z0OqhvDkT/KNtt0gWo+8Gm35gHmurB/3NYGfdNJKg4wP58FZ07LuEwv6gu0Vvs2xNA8+vN5xG3feCaWu56S12ebukU/Ikm8ROB+aAXvLnG6SS8TZaLAaLRbQdk6vbpOLBg+ypch1+eH0/ZHLBtUupe6eDVA1Or7bczM0g+PVB8lNFUT+Pv2VbZILG52q3VrgH3obkpu4LAZFN9Vup3IPg6H6p7Qlyjw9v063oHsnd7Nk3jw+3PeJNYL65KSd7FRTfFgM8JryP4a1dH4YpPp5TzjOYbhZ5TpvOm3k+i83TuDIF4E/DQY15c/n8CUG4Nginz+TJFEI9WK4H4LSb3Ffm6IKrP1gvLaHO86Mxb+2Pw2jnikEJPgEDhibcXTQ87lvzymcT/DhY5Nb/2Icv6+PxuH4J9x99FtVV/VB/+MMf/vCHm9DwPO/3WywD6m/HQbSNBsclmK6w3W7HE8I+eu02nzDiv7fbvb5zYH8rsM/X6nhdd05wqidGYjbsqOIZpMUwHYD3SsBDBc7viKrqRTDBjiJej9vDlOIP5z9MFVATKjXL46juvPFTYrvNAaIFalhWjxPPURPwXXlV/B5NrAYIkdx7ANZBo6UzUT4+u3gnt9dih3RUlzM2Rb2mIa2hJ+DOp/zS2qA9jESJslzu52202ALHRRRFgvt2tVgshop7jVd+exLuMBJNVxCE+n0+gJbLveH5DRi4b/oMnDsKnQaDmKlL5IKE5+DeGNBUea9c7gBYFCzrOgnuAow7GUKv7z4Ld29HeKUjT8C5mTsZbDab9RvnjjoDcbfn4D6HMhZ7xxtzwALtG7nDtGoE6wKA+yd0fHR6Eu6wPxb6gOYH7O7gDnoe7wX30FlRqGP4HNznLl/24bkIyW20zNx9K/ddtN3uJoo7rPjG0/en4C7l3d9PQtfCne/8bdd1G1/4w4I7LPmm7dlTcIdtYYWe95GBO69TC94pVDmTq8Hseh6OuZnfkmfgztd1M/vuN4Ik97rU+lAihPb8xhyWcmORkDW1uxdz52tkwc4/AXdeBISgaDQmMXcmxICaLyozUjKCAXoka7Gm9XzTdd1tPeYuN/9+Bu5Oq0mFsq4luItZBj4UmuSqnP2jVCYo03oezo8u3OWq26fg7pz4KAzPuIN9H6pZ8ohX8FjygrXs3EiRmcAF4jBSV/I4TsSBzkkksp9jYLLxtn5drYazzz607OQlBs9meJ32avV6vKwt6K9fXuRCiVBdGdad6fplLSZi7+GT9V8a+w/PA99TqDvC2LHIVZ6LT7EuXY+Pf89o5FlqO8ycmak4dsc9Icsjda4J/o7644HnS9+Iy4bf/XhrdEIxrw3yqkoZjRPriotsPPAk4Nx5e0ru1OV1LcCdf5VRK2Qq+/F1v6zdJwyfgYhx9y1Y4Eohe8u4k0UHTgruKITrnmw2YQ44d3nMufe5t8c3EWTc430GgHt+cdbng407bCII3N+dOoPkHojj3wLO/ZPhLLm/+R0ka5BxeW82m3G4yo6b+dVpnwpK1+Gt4F5DGMS9BjY+rtIYXvQ8cX/PUJ6ycdDJlY1jf3DJVnoeh5I7n4Lzy7izuM6NJHfYd0YW+wM9H4WbDYQtwJ2uIUX9ewSec58zeII73b+o3Qayev73iDoH5y45ST1PiEzi/V/YOJ07FM9Xfh1ZfXQYpG+zZ4fn58hTFIGBOy8yC70+1nW/16clae5c7oe/P5bhCTnJ/cSO+W48RzjYxzEsciGBrepfPOxy55vhtRjksQ/H8B4aLf7ptCVxkuc4fpnC+8Mf/vCHP1SB/wGdVzyPJ9+vLQAAAABJRU5ErkJggg=="
                alt="tasty emoji"
              />
              <h3>Gluten Free</h3>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwW9KiJIxpfpqrfLA7tNekBIoIBU-GiFqaIw&usqp=CAU"
                alt="sugar cane"
              />
              <h3>Refined Sugar Free</h3>
            </div>
          </div>
        </div>
        <div className="something_declicious">
          <h1>Make Something Delicious with Our Coconut Sugar</h1>
          <div className="make_something">
            {makesomething.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.image} alt="image" />
                  <h3>{item.title}</h3>
                </div>
              );
            })}
          </div>
          <Button type="primary" className="view_all" onClick={handleViewAll}>
            View All
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export { Sauces };
