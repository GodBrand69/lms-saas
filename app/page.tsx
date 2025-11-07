import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionList";
import Cta from "@/components/CTA";
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";

const Page = async () => {

  const companions = await getAllCompanions({ limit: 4 });
  const recentSessions = await getRecentSessions(10);
  return (
    <main>
      <h1>Popular Companions</h1>

        <section className="home-section">
            {companions.map((companion: Companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                />
            ))}

        </section>

        <section className="home-section">
            <CompanionsList
                title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
            />
            <Cta />
        </section>
    </main>
  )
}

export default Page