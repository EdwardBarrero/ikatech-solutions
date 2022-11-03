import NavOrganismOffers from "../../organism/nav-organism-offers/Nav-organism-offers";
import NavOrganismHeader from "../../organism/nav-organism-header/Nav-organism-header";
import NavOrganismMenu from "../../organism/nav-organism-menu/Nav-organism-menu";

import "./detail-template-nav.scss";
export default function DetailTemplateNav() {
  return (
    <>
    <NavOrganismOffers />
    <NavOrganismHeader />
    <NavOrganismMenu />
    </>
  )
}
