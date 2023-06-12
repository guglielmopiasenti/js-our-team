// Team members array

const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

//  For...of loop to print details on the console

for (const member of teamMembers) {
  console.log(`Name: ${member.name}`);
  console.log(`Role: ${member.role}`);
  console.log(`Photo: ${member.image}`);
}

// Target element from DOM

const teamContainer = document.getElementById("team-container");

// For loop to print the member's detail on the DOM

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  const memberInfo = document.createElement("div");

  const name = document.createElement("p");
  name.textContent = `Name: ${member.name}`;
  memberInfo.appendChild(name);

  const role = document.createElement("p");
  role.textContent = `Role: ${member.role}`;
  memberInfo.appendChild(role);

  const photo = document.createElement("img");
  photo.src = `img/${member.image}`;
  memberInfo.appendChild(photo);

  teamContainer.appendChild(memberInfo);
}
