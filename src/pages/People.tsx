import { useParams, Navigate } from "react-router-dom";
import bottingImg from "@/assets/people/botting.jpg";
import ejariasImg from "@/assets/people/ejarias.jpg";
import eilandImg from "@/assets/people/eiland.jpg";
import kirkpatrickImg from "@/assets/people/kirkpatrick.jpg";
import mcconnellImg from "@/assets/people/mcconnell.jpg";
import nikolauImg from "@/assets/people/nikolau.jpg";
import rodriguezImg from "@/assets/people/rodriguez.png";
import shoultzImg from "@/assets/people/shoultz.jpg";
import withersImg from "@/assets/people/withers.jpg";
import whiteImg from "@/assets/people/white.jpg";

interface Person {
  name: string;
  role: string;
  image: string;
}

const placeholderImage = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop";

const teams: Record<string, Person[]> = {
  "2026": [
    { name: "Melinda Agnew", role: "Editor", image: placeholderImage },
    { name: "Rebecca Botting", role: "Editor", image: bottingImg },
    { name: "Ejarias P. Burgin", role: "Editor", image: ejariasImg },
    { name: "Frantzline Tingue", role: "Editor", image: placeholderImage },
    { name: "Tony Eiland", role: "Editor", image: eilandImg },
    { name: "Alexis Kirkpatrick", role: "Editor", image: kirkpatrickImg },
    { name: "Molly McConnell", role: "Editor", image: mcconnellImg },
    { name: "Katherine Nikolau", role: "Editor", image: nikolauImg },
    { name: "Marion Rodriguez", role: "Editor", image: rodriguezImg },
    { name: "Ava Savino", role: "Editor", image: placeholderImage },
    { name: "Bonnie Shoultz", role: "Editor", image: shoultzImg },
    { name: "Shilloh Withers", role: "Editor", image: withersImg },
    { name: "Troy White", role: "Senior Editor", image: whiteImg },
    { name: "Patrick W. Berry", role: "Faculty Adviser", image: placeholderImage },
  ],
  "2025": [
    { name: "Robin Brownlee", role: "Editor", image: "https://project-mend.net/images/brownlee.png" },
    { name: "Rebecca Botting", role: "Editor", image: bottingImg },
    { name: "Mary Carr", role: "Editor", image: "https://project-mend.net/images/carr.png" },
    { name: "Charlee Crosby", role: "Editor", image: "https://project-mend.net/images/crosby.jpg" },
    { name: "Tony Eiland", role: "Editor", image: eilandImg },
    { name: "Sierra Huff", role: "Editor", image: "https://project-mend.net/images/huff.png" },
    { name: "Freddie Jackson", role: "Editor", image: "https://project-mend.net/images/jackson.png" },
    { name: "Molly McConnell", role: "Editor", image: mcconnellImg },
    { name: "Katherine Nikolau", role: "Editor", image: nikolauImg },
    { name: "Marion Rodriguez", role: "Editor", image: rodriguezImg },
    { name: "Bonnie Shoultz", role: "Editor", image: shoultzImg },
    { name: "Troy White", role: "Senior Editor", image: whiteImg },
    { name: "Gabriella Wilson", role: "Editor", image: "https://project-mend.net/images/wilson.png" },
    { name: "Patrick W. Berry", role: "Faculty Adviser", image: "https://project-mend.net/images/berry.png" },
  ],
  "2024": [
    { name: "Jessie Anderson", role: "Editor", image: "https://project-mend.net/images/anderson.jpg" },
    { name: "Montwella Bufford", role: "Editor", image: "https://project-mend.net/images/bufford.jpg" },
    { name: "Ilhy Gomez Del Campo Rojas", role: "Editor", image: "https://project-mend.net/images/gomez.png" },
    { name: "Vince Moody", role: "Editor", image: "https://project-mend.net/images/moody.png" },
    { name: "Katherine Nikolau", role: "Editor", image: nikolauImg },
    { name: "Daquan Noel", role: "Editor", image: "https://project-mend.net/images/noel.png" },
    { name: "Troy Paris", role: "Editor", image: "https://project-mend.net/images/paris.jpg" },
    { name: "Theodore Robinson", role: "Editor", image: "https://project-mend.net/images/robinson.png" },
    { name: "James Seibles", role: "Editor", image: "https://project-mend.net/images/seibles.png" },
    { name: "Jacqueline Thompkins", role: "Editor", image: "https://project-mend.net/images/thompson.png" },
    { name: "Troy White", role: "Senior Editor", image: "https://project-mend.net/images/white.png" },
    { name: "Sherba Whitehurst", role: "Editor", image: "https://project-mend.net/images/whitehurst.png" },
    { name: "Michael J. Willacy", role: "Editor", image: "https://project-mend.net/images/willacy.png" },
    { name: "Daquane Williams", role: "Editor", image: "https://project-mend.net/images/williams.png" },
    { name: "Gabriella Wilson", role: "Editor", image: "https://project-mend.net/images/wilson.png" },
    { name: "Patrick W. Berry", role: "Faculty Adviser", image: "https://project-mend.net/images/berry.png" },
  ],
  "2023": [
    { name: "Fátima Bings Martínez", role: "Editor", image: "https://project-mend.net/images/bings.png" },
    { name: "Karl Deans", role: "Editor", image: "https://project-mend.net/images/deans.png" },
    { name: "Luke Hardy", role: "Editor", image: "https://project-mend.net/images/hardy.png" },
    { name: "Brian T. Shaw", role: "Editor", image: "https://project-mend.net/images/shaw.png" },
    { name: "Cherise Hunter Titus", role: "Editor", image: "https://project-mend.net/images/titus.png" },
    { name: "Troy White", role: "Editor", image: "https://project-mend.net/images/white.png" },
    { name: "Patrick W. Berry", role: "Faculty Adviser", image: "https://project-mend.net/images/berry.png" },
  ],
};

const People = () => {
  const { year } = useParams<{ year: string }>();
  const currentYear = year || "2026";

  // Redirect if invalid year
  if (!teams[currentYear]) {
    return <Navigate to="/people/2026" replace />;
  }

  const team = teams[currentYear];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Editorial Team {currentYear}
          </h1>
          <p className="text-lg text-muted-foreground">
            Meet the editors, contributors, and community members who make Project Mend possible.
          </p>
        </div>

        {/* Contributors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((person, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 mb-4 overflow-hidden rounded-lg border-2 border-muted">
                  <img
                    src={person.image}
                    alt={`${person.name} - ${person.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{person.name}</h3>
                <p className="text-sm text-primary font-medium">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;
