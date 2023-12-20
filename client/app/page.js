/**
 * Title: Write a program using JavaScript on Page
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 19, December 2023
 */

import Banner from "@/components/Banner";
import Main from "@/layouts/main/Main";

export default function Home() {
  return (
    <Main>
      <main className="">
        <Banner />
        <section className="max-w-5xl mx-auto px-4 border">This is content section</section>
      </main>
    </Main>
  );
}
