import { MdHistoryEdu, MdTrackChanges } from "react-icons/md";

export const About = () => {
  return (
    <section className="pt-24">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-10">
          <h2 className="h2">Founded with a passion for exellence</h2>
          <ul className="flex flex-col gap-12">
            <li>
              <div className="mb-4 flex items-center gap-2 text-primary">
                <MdHistoryEdu size={24} />
                <h3 className="h6">Our Story</h3>
              </div>
              <p>
                Our journey began with a vision to redefine industry standards.
                From humble beginnings, we have grown into a team driven by
                innovation, dedication, and the pursuit of excellence. Every
                challenge we faced strengthened our commitment to deliver
                exceptional results.
              </p>
            </li>
            <li>
              <div className="mb-4 flex items-center gap-2 text-primary">
                <MdTrackChanges size={24} />
                <h3 className="h6">Our Mission</h3>
              </div>
              <p>
                Our mission is to empower individuals and businesses by
                providing innovative solutions that create real value. We strive
                to combine creativity, technology, and expertise to help our
                clients achieve their goals and make a lasting impact in their
                industries.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
