import CompanionForm from "@/components/CompanionForm";
import {redirect} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

const NewCompanion = async () => {
    const { userId } = await auth();

    if(!userId) {
        redirect('/sign-in');
    }
    return (
        <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
                <article className="w-full gap-4 flex flex-col">
                    <h1>Companion Builder</h1>

                    <CompanionForm />
                </article>
        </main>
    )
}

export default NewCompanion