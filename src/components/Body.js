import React from "react";
import taj from "../photos/taj.jpg";
import red from "../photos/red.jpg";
import agra from "../photos/agra.jpg";
import lotus from "../photos/lotus.jpg";
import golden from "../photos/golden.jpg";
import gate from "../photos/gate.jpg";
import minar from "../photos/qutab-minar.jpg";
import hawa from "../photos/hawa.jpg";
import audioSong from "../photos/anthem.jpg";

export default function Body() {
  return (
    <>
      <div className="container">
        <img src={taj} alt="" className="img" />
        <div className="content">
          <h2>Taj Mahal</h2>
          <p className="text">
            The Taj Mahal, a timeless masterpiece located in Agra, India, is an
            architectural marvel and a symbol of enduring love. Built by Emperor
            Shah Jahan in the 17th century as a mausoleum for his beloved wife
            Mumtaz Mahal, its white marble domes, intricate carvings, and
            symmetrical gardens captivate visitors from around the world.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Taj_Mahal"
            className="wiki"
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <h2>Red Fort</h2>
          <p className="text">
            The Red Fort, situated in Delhi, India, is a magnificent historical
            fort that showcases the grandeur of Mughal architecture. Built by
            Emperor Shah Jahan in the 17th century, it served as the main
            residence for Mughal emperors. Its red sandstone walls, imposing
            gates, and intricate decorations make it a significant cultural and
            historical landmark.ora autem cumque at molestias quisquam,
            perferendis vitae impedit dolore libero eveniet doloribus.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Red_Fort"
            className="wiki"
            target="_blank"
          >
            Read More
          </a>
        </div>
        <img src={red} alt="" className="img" />
      </div>
      <div className="container">
        <img src={gate} alt="" className="img" />
        <div className="content">
          <h2>India Gate</h2>
          <p className="text">
            India Gate, located in the heart of New Delhi, India, is a majestic
            war memorial dedicated to the soldiers who sacrificed their lives
            during World War I and the Afghan Wars. Designed by Sir Edwin
            Lutyens, this iconic structure stands as a symbol of valor,
            patriotism, and national pride. Surrounded by lush lawns, it serves
            as a popular gathering place for both locals and tourists.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/India_Gate"
            className="wiki"
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <h2>Hawa Mahal</h2>
          <p className="text">
            Hawa Mahal, also known as the "Palace of Winds," is a mesmerizing
            architectural gem located in Jaipur, India. Built in 1799 by
            Maharaja Sawai Pratap Singh, the five-story structure resembles a
            honeycomb with 953 small windows (jharokhas) designed to allow cool
            breezes to flow through during the scorching summers. This unique
            palace stands as a testament to Rajputana craftsmanship and provides
            a captivating glimpse into the royal history of Jaipur.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Hawa_Mahal"
            className="wiki"
            target="_blank"
          >
            Read More
          </a>
        </div>
        <img src={hawa} alt="" className="img" />
      </div>
      <div className="container">
        <img src={minar} alt="" className="img" />
        <div className="content">
          <h2>Qutub Minar</h2>
          <p className="text">
            Qutub Minar, situated in Delhi, India, is an ancient and iconic
            monument that showcases the rich heritage of the country.
            Constructed by Qutb-ud-din Aibak in the 12th century, it is the
            tallest brick minaret globally, standing at a height of 73 meters
            (240 feet). Adorned with intricate carvings and verses from the
            Quran, the Qutub Minar stands as a remarkable example of
            Indo-Islamic architecture and is a UNESCO World Heritage site.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Qutb_Minar"
            className="wiki"
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <h2>Golden Temple</h2>
          <p className="text">
            The Golden Temple, also known as Sri Harmandir Sahib, is a sacred
            and revered religious site located in Amritsar, Punjab, India. It is
            the holiest Gurdwara (Sikh place of worship) and serves as the
            central place of the Sikh faith. The stunning architecture is
            adorned with gold leaf, giving it a majestic and ethereal
            appearance, especially when reflected in the surrounding Amrit
            Sarovar (holy tank). The temple attracts millions of devotees and
            visitors from around the world, promoting peace, equality, and
            communal harmony.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Golden_Temple"
            className="wiki"
            target="_blank"
          >
            Read More
          </a>
        </div>
        <img src={golden} alt="" className="img" />
      </div>
      <div className="container">
        <img src={lotus} alt="" className="img" />
        <div className="content">
          <h2>Lotus Temple</h2>
          <p className="text">
            The Lotus Temple, located in Delhi, India, is a stunning and unique
            architectural marvel. Shaped like a blooming lotus flower, it is a
            Bahá'í House of Worship and a place of meditation and prayer for
            people of all faiths. Surrounded by lush gardens, the temple's
            serene ambiance fosters a sense of unity, peace, and tranquility.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Lotus_Temple"
            className="wiki"
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <h2>Agra Fort</h2>
          <p className="text">
            Agra Fort, situated in Agra, India, is a grand and historic
            fortification that served as the main residence of the Mughal
            emperors until the 17th century. Built with red sandstone, it boasts
            impressive palaces, courtyards, and intricate marble work. This
            UNESCO World Heritage site offers a glimpse into India's rich
            architectural and cultural heritage, making it a must-visit
            destination for history enthusiasts.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Agra_Fort"
            className="wiki"
            target="_blank"
          >
            Read More
          </a>
        </div>
        <img src={agra} alt="" className="img" />
      </div>
      <div id="anthem">
        <audio src={audioSong} controls>
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  );
}
