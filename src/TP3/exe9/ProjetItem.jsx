function ProjetItem({ nom, type, budget }) {
  return (
    <li>
      {nom} — {type} — {budget.toLocaleString("fr-FR")} DH
    </li>
  );
}

export default ProjetItem;