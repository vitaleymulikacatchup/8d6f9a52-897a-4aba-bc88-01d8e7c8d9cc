"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, BookOpen, Coffee, MessageCircle, Star } from "lucide-react";

const assetMap: { id: string; url: string; alt?: string }[] = [
  {"id":"hero-coffee","url":"https://images.pexels.com/photos/16545956/pexels-photo-16545956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elegant stack of white porcelain cups on a clean, minimalist background. Perfect for café or home décor themes."},
  {"id":"espresso-feature","url":"https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a barista preparing espresso in a café using a machine"},
  {"id":"latte-art-feature","url":"https://images.pexels.com/photos/5427259/pexels-photo-5427259.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A close-up of a cappuccino with heart latte art held by tattooed hands."},
  {"id":"coffee-shop-interior","url":"https://images.pexels.com/photos/26492562/pexels-photo-26492562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Charming café interior in Geelong featuring vinyl records, blackboard menu, and retro decor."},
  {"id":"hot-chocolate","url":"https://images.pexels.com/photos/6006665/pexels-photo-6006665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A delectable coffee topped with whipped cream surrounded by cookies and croissants on a wooden table."},
  {"id":"espresso-coffee","url":"https://images.pexels.com/photos/2067625/pexels-photo-2067625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A delightful morning setup with coffee and chocolate cake on a rustic table."},
  {"id":"mocha-coffee","url":"https://images.pexels.com/photos/798728/pexels-photo-798728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A close-up view of a creamy dessert coffee with artistic chocolate powder design."},
  {"id":"lata-coffee","url":"https://images.pexels.com/photos/207287/pexels-photo-207287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a cappuccino featuring intricate latte art design on a wooden table."},
  {"id":"biscoff-milkshake","url":"https://images.pexels.com/photos/27548805/pexels-photo-27548805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Warm coffee with a chocolate chip cookie on a cozy table setting, ideal for a relaxing moment."},
  {"id":"caramel-milkshake","url":"https://images.pexels.com/photos/7091585/pexels-photo-7091585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a caramel milkshake with whipped cream and biscuit topping against a salmon background."},
  {"id":"chocolate-milkshake","url":"https://images.pexels.com/photos/19011375/pexels-photo-19011375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Refreshing milkshakes topped with whipped cream in a cozy café. Perfect for dessert lovers."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Positive young woman in uniform smiling while standing at counter desk in  cafe"},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/4063590/pexels-photo-4063590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Woman in wheelchair using laptop at café, enjoying coffee and sunlight."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/15444413/pexels-photo-15444413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A focused barista prepares a drink behind a counter in a stylish café setting."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Cheerful ethnic female cafeteria owner in apron demonstrating cardboard signboard while standing near blue shabby door and windows after starting own business and looking at camera"},
  {"id":"contact-coffee","url":"https://images.pexels.com/photos/9050560/pexels-photo-9050560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful barista in a hat takes an order from a customer at a cozy coffee shop counter."}
];

export default function Home() {
  const getAsset = (id: string) => {
    const asset = assetMap.find(a => a.id === id);
    return {
      url: asset?.url ?? "/public/images/placeholder.webp",
      alt: asset?.alt ?? "Decorative image"
    };
  };

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "product" },
            { name: "About", id: "about" },
            { name: "Blog", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Black Coffee"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Freshly Roasted COFFEE"
          description="Experience the perfect blend of premium coffee beans, expertly roasted to perfection. Discover rich flavors and aromatic excellence in every cup."
          tag="Premium Quality"
          tagIcon={Coffee}
          buttons={[
            { text: "Shop Now", href: "product" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc={getAsset("hero-coffee").url}
          imageAlt={getAsset("hero-coffee").alt}
          imagePosition="right"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="TOP CATEGORIES"
          description="Explore The Recent Most Bought Drinks This Week"
          tag="Featured"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Hot Chocolate",
              price: "200 Af",
              imageSrc: getAsset("hot-chocolate").url,
              imageAlt: getAsset("hot-chocolate").alt
            },
            {
              id: "2",
              name: "Espresso Coffee",
              price: "150 Af",
              imageSrc: getAsset("espresso-coffee").url,
              imageAlt: getAsset("espresso-coffee").alt
            },
            {
              id: "3",
              name: "Mocha Coffee",
              price: "180 Af",
              imageSrc: getAsset("mocha-coffee").url,
              imageAlt: getAsset("mocha-coffee").alt
            },
            {
              id: "4",
              name: "Lata Coffee",
              price: "160 Af",
              imageSrc: getAsset("lata-coffee").url,
              imageAlt: getAsset("lata-coffee").alt
            },
            {
              id: "5",
              name: "Biscoff Milkshakes",
              price: "200 Af",
              imageSrc: getAsset("biscoff-milkshake").url,
              imageAlt: getAsset("biscoff-milkshake").alt
            },
            {
              id: "6",
              name: "Salted Caramel Milkshakes",
              price: "200 Af",
              imageSrc: getAsset("caramel-milkshake").url,
              imageAlt: getAsset("caramel-milkshake").alt
            },
            {
              id: "7",
              name: "Decadent Chocolate Milkshakes",
              price: "200 Af",
              imageSrc: getAsset("chocolate-milkshake").url,
              imageAlt: getAsset("chocolate-milkshake").alt
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Black Coffee"
          description={[
            "We are passionate coffee artisans dedicated to bringing you the finest coffee experience. From bean selection to the perfect roast, every step is crafted with care.",
            "Our mission is to create memorable moments through exceptional coffee, served in a warm and welcoming atmosphere that feels like home."
          ]}
          buttons={[
            { text: "Our Story", href: "blog" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Why Choose Our Coffee"
          description="Discover what makes our coffee special and why customers love coming back"
          tag="Quality"
          tagIcon={Award}
          features={[
            {
              title: "Premium Beans",
              description: "Sourced directly from the world's finest coffee farms, ensuring exceptional quality and flavor in every cup.",
              imageSrc: getAsset("espresso-feature").url,
              imageAlt: getAsset("espresso-feature").alt
            },
            {
              title: "Expert Roasting",
              description: "Our master roasters bring out the perfect balance of flavor and aroma through precise roasting techniques.",
              imageSrc: getAsset("latte-art-feature").url,
              imageAlt: getAsset("latte-art-feature").alt
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real experiences from our valued coffee lovers"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Coffee Enthusiast",
              testimonial: "The best coffee in town! The atmosphere is cozy and the staff is incredibly friendly. I come here every morning for my daily dose of happiness.",
              imageSrc: getAsset("testimonial-1").url,
              imageAlt: getAsset("testimonial-1").alt
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Professional",
              testimonial: "Perfect place for meetings and remote work. Great wifi, comfortable seating, and the espresso is absolutely divine. Highly recommended!",
              imageSrc: getAsset("testimonial-2").url,
              imageAlt: getAsset("testimonial-2").alt
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Local Resident",
              testimonial: "I love the variety of drinks available. The latte art is beautiful and the taste is even better. This place has become my second home.",
              imageSrc: getAsset("testimonial-3").url,
              imageAlt: getAsset("testimonial-3").alt
            },
            {
              id: "4",
              name: "David Kim",
              role: "Food Blogger",
              testimonial: "As someone who reviews cafes professionally, I can confidently say this is one of the finest coffee establishments I've experienced.",
              imageSrc: getAsset("testimonial-4").url,
              imageAlt: getAsset("testimonial-4").alt
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Coffee Stories"
          description="Insights, tips, and stories from the world of coffee"
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Coffee Culture",
              title: "The Art of Coffee Roasting",
              excerpt: "Discover the intricate process behind creating the perfect roast and how it affects your daily cup.",
              imageSrc: getAsset("espresso-feature").url,
              imageAlt: getAsset("espresso-feature").alt,
              authorName: "James Wilson",
              authorAvatar: getAsset("testimonial-1").url,
              date: "Jan 15, 2025"
            },
            {
              id: "2",
              category: "Brewing Tips",
              title: "Perfect Latte Art Techniques",
              excerpt: "Learn the secrets behind creating beautiful latte art that will impress your friends and customers.",
              imageSrc: getAsset("latte-art-feature").url,
              imageAlt: getAsset("latte-art-feature").alt,
              authorName: "Maria Santos",
              authorAvatar: getAsset("testimonial-2").url,
              date: "Jan 12, 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get In Touch With Us"
          description="Have questions about our coffee, catering services, or want to book a table? We'd love to hear from you."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your inquiry...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Black Coffee"
          columns={[
            {
              items: [
                { label: "Mocha Coffee", href: "product" },
                { label: "Espresso Coffee", href: "product" },
                { label: "Lata Coffee", href: "product" },
                { label: "Milk Shakes", href: "product" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact Us", href: "contact" },
                { label: "Support", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Menu", href: "product" },
                { label: "Blog", href: "blog" },
                { label: "Media", href: "blog" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}