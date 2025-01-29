import { Team } from "@/types/team";
import Image from "next/image";
import Graphic from "./Graphic";

export default function SingleTeam({ team }: { team: Team }) {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/4">
      <div className="mx-auto mb-10 w-full max-w-[370px]">
        <div className="relative aspect-[149/182] overflow-hidden rounded-lg">
          <Image
            src={team?.image}
            alt={team?.name}
            fill
            className="w-full object-cover object-center"
          />
          <div className="absolute bottom-5 left-0 w-full text-center">
            <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5">
              <h3 className="text-base font-semibold text-dark">
                {team?.name}
              </h3>
              <p className="text-sm text-body-color">{team?.designation}</p>

              <Graphic />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
