import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Leaf } from "lucide-react";
import Image from "next/image";
export default function AboutPage() {
  const teamMembers = [
    {
      name: "Chef Marcus Beaumont",
      role: "Executive Chef",
      description:
        "With over 15 years of Michelin-starred experience, Chef Beaumont brings innovative techniques and classical training to every dish.",
      image:
        "https://res.cloudinary.com/dhlyei79o/image/upload/v1749719146/chef_1_xtp86u.png",
    },
    {
      name: "Isabella Rodriguez",
      role: "Sommelier",
      description:
        "Our master sommelier curates an exceptional wine program, pairing each bottle with the perfect culinary complement.",
      image:
        "https://res.cloudinary.com/dhlyei79o/image/upload/v1749719145/chef_3_teamzr.jpg",
    },
    {
      name: "James Chen",
      role: "Pastry Chef",
      description:
        "Creating edible art with every dessert, Chef Chen's innovative approach to pastry has earned international recognition.",
      image:
        "https://res.cloudinary.com/dhlyei79o/image/upload/v1749719144/chef_1_qivkfm.jpg",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dhlyei79o/image/upload/v1749718074/images_11_ptucpi.jpg" // Replace with your Cloudinary image
          alt="Our story background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Optional: Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Text Content */}
        <div className="relative z-20">
          <h1 className="font-serif text-5xl font-bold text-amber-400 mb-6">
            Our Story
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Born from a passion for culinary excellence and a vision to create
            unforgettable dining experiences
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-6">
                The Beginning
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The Obsidian Plate was born from a simple yet profound vision:
                to create a dining experience that transcends the ordinary.
                Founded in 2018 by culinary visionary Marcus Beaumont, our
                restaurant emerged from a desire to blend classical techniques
                with modern innovation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Named after the volcanic glass that forms under intense pressure
                and heat, The Obsidian Plate represents the transformation of
                raw ingredients into something extraordinary through passion,
                skill, and dedication.
              </p>
            </div>
            <div className="relative">
              <Image
                width={900}
                height={1200}
                src="/images (16).jpg"
                alt="Restaurant interior"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-amber-400 mb-8">
            Our Philosophy
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We believe that dining is more than sustenance—it's an art form, a
            celebration, and a journey of discovery. Every dish tells a story,
            every flavor evokes emotion, and every meal creates lasting
            memories.
          </p>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <Award className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Excellence
              </h3>
              <p className="text-gray-400 text-sm">
                Uncompromising quality in every aspect of our service
              </p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Passion
              </h3>
              <p className="text-gray-400 text-sm">
                Love for culinary arts drives everything we do
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Community
              </h3>
              <p className="text-gray-400 text-sm">
                Building connections through shared dining experiences
              </p>
            </div>
            <div className="text-center">
              <Leaf className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Sustainability
              </h3>
              <p className="text-gray-400 text-sm">
                Responsible sourcing and environmental consciousness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-amber-400 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-amber-400 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-amber-300 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Ambiance */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                width={900}
                height={1200}
                src="https://res.cloudinary.com/dhlyei79o/image/upload/v1749718094/images_18_ha9xzb.jpg"
                alt="Restaurant dining room"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-6">
                The Experience
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Step into The Obsidian Plate and enter a world where
                sophistication meets warmth. Our carefully designed interior
                features rich textures, ambient lighting, and intimate seating
                arrangements that create the perfect atmosphere for any
                occasion.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                From romantic dinners to business meetings, celebrations to
                quiet contemplation, our space adapts to your needs while
                maintaining an air of refined elegance that makes every visit
                feel special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-amber-400 mb-8">
            Our Commitment
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We believe in responsible dining. Our commitment extends beyond the
            plate to encompass sustainable practices, local partnerships, and
            community involvement.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-serif text-xl font-bold text-amber-400 mb-4">
                Local Sourcing
              </h3>
              <p className="text-gray-300">
                We partner with local farms and producers to source the freshest
                ingredients while supporting our community and reducing our
                environmental footprint.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-amber-400 mb-4">
                Zero Waste Initiative
              </h3>
              <p className="text-gray-300">
                Our kitchen operates on zero-waste principles, composting
                organic matter and repurposing ingredients to minimize
                environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
