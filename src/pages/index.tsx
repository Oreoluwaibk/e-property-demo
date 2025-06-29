import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import WebsiteBg from "@/components/backgrounds/WebsiteBg";
import { BG1 } from "../../assets";
import DescriptionCard from "@/components/cards/DescriptionCard";
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
import { useState } from "react";
import { ListingCards } from "@/components/cards/ListingCards";
import { Col, Row } from "antd";


const descriptions = [
  {id:1,name: "List Your Property with Confidence", description: "Easily manage your properties, set rental terms, and reach qualified tenants. Our platform gives you full control, from listing to lease — all in one place."},
  {id: 2,name: "Connect Clients to the Perfect Property", description: "Showcase curated listings, schedule viewings, and close deals faster. Whether you're working with landlords or house hunters, we simplify your sales process with powerful tools."},
  {id: 3,name: "Find Your Next Home, Effortlessly", description: "Search properties by location, price, and amenities. Get real-time updates, book viewings, and chat directly with agents — all tailored to your needs."}
]

const titlement = [
  {id: 1, name: "LandLord", title: "Manage and Monetize Your Property Seamlessly", features: ["Fast property listing with images & videos", "Built-in rent collection and reminders", "Dashboard to track property performance"], buttonTitle: "List My Prpoerties", description: "List your apartments, set rental terms, screen potential tenants, and track rent payments. Let your property work for you, not the other way around."},

  {id: 2, name: "Tenants / Renters", title: "Find the Right Home Without the Hassle", features: ["Book property tours online", "Filter by location, price, amenities", "Save & compare listings", "Chat instantly with agents or owners"], buttonTitle: "Find a Home", description: "Browse verified listings, set your preferences, and chat directly with agents or landlords. Whether you're looking to rent or buy, we help you find a place that feels like home."},

  {id: 3, name: "Agents", title: "Connect Homes with the People Who Need Them", features: ["Multi-property management", "Calendar for viewing appointments", "Verified agent profile + reviews", "CRM tools to manage leads"], buttonTitle: "Join As Agent", description :"Upload multiple listings, manage appointments, and grow your network. Our tools help you close deals faster and build client trust with verified profiles."},
  
  {id: 4, name: "Artisans / Service Providers", title: "Get Hired by Property Owners, Instantly", features: ["Create a professional service profile", "Get job requests from landlords & agents", "Ratings & reviews to boost credibility"], buttonTitle: "Offer My Services", description: "Whether you're a plumber, electrician, or painter — get matched with real jobs in real time. Build your reputation, get paid fast, and keep your calendar full."}
]
export default function Home() {
  const [cards, setCards] = useState(descriptions);
  const [active, setActive] = useState<string | null | number>(null);
  

  return (
    <WebsiteBg>
      <>
      <div className="container" style={{backgroundImage: `url(${BG1.src})`}}>
        <section className="hero-banner">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        className="hero-title"
      >
        Find. List. Lease. Everything Property In One Place
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7, ease: 'easeOut' }}
        className="hero-description"
      >
        For landlords, agents, and renters — we simplify the housing experience.
      </motion.p>
        </section>
        <div className="bacground"  >
          {cards.map((card, index: number) => {
            const isActive = active === card.id;

            return (
              <motion.div
                key={card.id}
                layout
                onMouseEnter={() => setActive(card.id)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(card.id)}
                className="stacked-card"
                style={{
                  top: index * 100, // stacking margin
                  zIndex: isActive ? 10 : index,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 250,
                  damping: 25,
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                }}
                >
                <DescriptionCard 
                  name={card.name}
                  description={card.description}
                />
              </motion.div>
                  
                )
            })}
        </div>
        
        <Row gutter={[15, 15]} className="pb-4">
          {titlement.map((details: any, index: number) => {
            return (
              <Col lg={6} sm={12} xs={24} key={index}>
                <ListingCards 
                  name={details.name}
                  title={details.title}
                  features={details.features}
                  buttonTitle={details.buttonTitle}
                  description={details.description}
                  key={index}
                />
              </Col>
            )
          })}
        </Row>

       
      </div>
       <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-lg text-gray-700 px-6 py-24"
          style={{backgroundColor: "#F2F4F7", width: "100%"}}
        >
          <h2 className="text-3xl font-bold mb-4">
            Redefining the Property Experience for Everyone
          </h2>
          <p>
            We believe that finding, listing, or managing a property shouldn’t feel like a chore. Whether you're a landlord looking to simplify management, a tenant seeking the perfect space, an agent trying to close faster, or an artisan offering trusted services — our platform brings it all together under one smart, secure, and intuitive system.
            <br /><br />
            Built for real people with real needs, we’re creating a housing ecosystem that works for everyone — without the stress, delays, or middlemen.
          </p>
        </motion.div>

      </>
      

    </WebsiteBg>
  );
}
