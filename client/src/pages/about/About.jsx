/**
 * @fileoverview About page component for Right Housing.
 * Provides information about the organization's mission, vision, and team.
 */

/**
 * About page component that displays organization information.
 * Includes mission statement, history, team members, and values.
 *
 * @component
 * @returns {JSX.Element} The rendered About page component
 */
const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            About Right Housing
          </h1>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            repudiandae ea similique unde, ut amet quaerat velit ullam eaque
            praesentium optio autem eos dolore doloremque.
          </p>
        </section>

        {/* Vision and Mission */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                eaque quidem necessitatibus suscipit, blanditiis officia ut
                eligendi eos error soluta animi accusamus, atque doloremque unde
                numquam aut fugit? Quidem, perspiciatis!
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium itaque ipsa nostrum dolor ratione iusto esse
                quibusdam, temporibus, mollitia libero, perspiciatis sunt
                eligendi cumque voluptatibus necessitatibus consequatur commodi
                reprehenderit deserunt.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          {/* Add team member cards here */}
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          {/* Add values content here */}
        </section>
      </div>
    </div>
  );
};

export default About;
