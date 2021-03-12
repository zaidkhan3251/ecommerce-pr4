import React from "react";
import "./Home.css";
import Product2 from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
         />
        {/* https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg */}
        <div className="home__section">
        <div className="col">
           <Product2
           desc="This is a description"
           id={1}
           title="The Demo Title"
           price={56.4}
           rating={5}
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoklRd1rkTqL6hbQusJkbO6plfSWQ8shjxw&usqp=CAU"
         />
           <Product2
            id={2}
            desc="This is a description"
            title="The Demo Title"
            price={29.9}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUv0caKD0vmZIYVPN_L0PfQl_gsmT08DD4jA&usqp=CAU"
          />
        </div>
        <div className="col">
           <Product2 
           desc="This is a description"
           id={3}
           title="The Demo Title"
           price={23.5}
           rating={5}
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HYvDk9NTJ4g8jbum3wy0_VAfOZrllqG9XA&usqp=CAU"
         />
           <Product2
            id={4}
            desc="This is a description"
            title="The Demo Title"
            price={29.9}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUv0caKD0vmZIYVPN_L0PfQl_gsmT08DD4jA&usqp=CAU"
          />
        </div>
        </div>
        <div className="home__section">
        <div className="col">
           <Product2
           desc="This is a description"
           id={5}
           title="The Demo Title"
           price={56.4}
           rating={5}
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoklRd1rkTqL6hbQusJkbO6plfSWQ8shjxw&usqp=CAU"
         />
           <Product2
            id={6}
            desc="This is a description"
            title="The Demo Title"
            price={29.9}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUv0caKD0vmZIYVPN_L0PfQl_gsmT08DD4jA&usqp=CAU"
          />
        </div>
        <div className="col">
           <Product2 
           desc="This is a description"
           id={7}
           title="The Demo Title"
           price={23.5}
           rating={2}
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HYvDk9NTJ4g8jbum3wy0_VAfOZrllqG9XA&usqp=CAU"
         />
           <Product2
           desc="This is a description"
           id={8}
           title="The Demo Title"
           price={56.4}
           rating={3}
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoklRd1rkTqL6hbQusJkbO6plfSWQ8shjxw&usqp=CAU"
         />
        </div>
        </div>
        <div className="home__section">
        <div className="col">
           <Product2 
           desc="This is a description"
           id={9}
           title="The Demo Title"
           price={23.5}
           rating={5}
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HYvDk9NTJ4g8jbum3wy0_VAfOZrllqG9XA&usqp=CAU"
         />
           <Product2
            id={10}
            desc="This is a description"
            title="The Demo Title"
            price={29.9}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUv0caKD0vmZIYVPN_L0PfQl_gsmT08DD4jA&usqp=CAU"
          />
        </div>
        <div className="col">
           <Product2 
           desc="This is a description"
            id={11}
            
            title="The Demo Title"
            price={29.9}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUv0caKD0vmZIYVPN_L0PfQl_gsmT08DD4jA&usqp=CAU"
          />
           <Product2 
           desc="This is a description"
           id={12}
           title="The Demo Title"
           price={23.5}
           rating={5}
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HYvDk9NTJ4g8jbum3wy0_VAfOZrllqG9XA&usqp=CAU"
         />
        </div>
        </div>





        {/* <div className="home__row">
         
          
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="The Demo Title"
            price={56.4}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoklRd1rkTqL6hbQusJkbO6plfSWQ8shjxw&usqp=CAU"
          />
          <Product
            id={4}
            title="The Demo Title"
            price={67.6}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMD0JTg9u6aSClEiFKa08qb9QwdNMqM7O7vQ&usqp=CAU"
          />
          <Product
            id={5}
            title="The Demo Title"
            price={34.7}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5heQk0Vjn77bXWVtlOdw44k5wx36grFQ0g&usqp=CAU"
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="The Demo Title"
            price={199.9}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1czqGYi-tjatgHtZjlMvNBxBPPbrOErG0aQ&usqp=CAU"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
