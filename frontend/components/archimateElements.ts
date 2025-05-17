export interface ElementType {
  name: string;
  color: string;
  icon: string;
}

export const ARCHIMATE_ELEMENTS: ElementType[] = [
  // Strategy layer
  { name: "Capability", color: "#E0D3F8", icon: "📈" },
  { name: "Course of Action", color: "#E0D3F8", icon: "🏹" },
  { name: "Resource", color: "#E0D3F8", icon: "🧰" },
  { name: "Value Stream", color: "#E0D3F8", icon: "🔄" },

  // Business layer
  { name: "Business Actor", color: "#FFF2CC", icon: "👤" },
  { name: "Business Role", color: "#FFF2CC", icon: "🎭" },
  { name: "Business Collaboration", color: "#FFF2CC", icon: "🤝" },
  { name: "Business Interface", color: "#FFF2CC", icon: "🔌" },
  { name: "Business Process", color: "#FFF2CC", icon: "📝" },
  { name: "Business Function", color: "#FFF2CC", icon: "⚙" },
  { name: "Business Interaction", color: "#FFF2CC", icon: "🔀" },
  { name: "Business Service", color: "#FFF2CC", icon: "💼" },
  { name: "Business Event", color: "#FFF2CC", icon: "📅" },
  { name: "Business Object", color: "#FFF2CC", icon: "📦" },
  { name: "Contract", color: "#FFF2CC", icon: "📜" },
  { name: "Product", color: "#FFF2CC", icon: "📦" },

  // Application layer
  { name: "Application Component", color: "#DAE8FC", icon: "🧩" },
  { name: "Application Collaboration", color: "#DAE8FC", icon: "🤝" },
  { name: "Application Interface", color: "#DAE8FC", icon: "🔌" },
  { name: "Application Function", color: "#DAE8FC", icon: "⚙" },
  { name: "Application Service", color: "#DAE8FC", icon: "💻" },
  { name: "Application Process", color: "#DAE8FC", icon: "📝" },
  { name: "Application Interaction", color: "#DAE8FC", icon: "🔀" },
  { name: "Application Event", color: "#DAE8FC", icon: "📅" },
  { name: "Data Object", color: "#DAE8FC", icon: "🗄" },

  // Technology layer
  { name: "Node", color: "#E2F1D6", icon: "🖥" },
  { name: "Device", color: "#E2F1D6", icon: "📱" },
  { name: "System Software", color: "#E2F1D6", icon: "💽" },
  { name: "Technology Collaboration", color: "#E2F1D6", icon: "🤝" },
  { name: "Technology Interface", color: "#E2F1D6", icon: "🔌" },
  { name: "Path", color: "#E2F1D6", icon: "🛣" },
  { name: "Communication Network", color: "#E2F1D6", icon: "📡" },
  { name: "Technology Function", color: "#E2F1D6", icon: "⚙" },
  { name: "Technology Process", color: "#E2F1D6", icon: "📝" },
  { name: "Technology Interaction", color: "#E2F1D6", icon: "🔀" },
  { name: "Technology Service", color: "#E2F1D6", icon: "🖥" },
  { name: "Technology Event", color: "#E2F1D6", icon: "📅" },
  { name: "Artifact", color: "#E2F1D6", icon: "📦" },

  // Motivation
  { name: "Stakeholder", color: "#F8CECC", icon: "🙋" },
  { name: "Driver", color: "#F8CECC", icon: "🚗" },
  { name: "Assessment", color: "#F8CECC", icon: "📝" },
  { name: "Goal", color: "#F8CECC", icon: "🎯" },
  { name: "Outcome", color: "#F8CECC", icon: "🏁" },
  { name: "Principle", color: "#F8CECC", icon: "📜" },
  { name: "Requirement", color: "#F8CECC", icon: "✅" },
  { name: "Constraint", color: "#F8CECC", icon: "⛔" },
  { name: "Value", color: "#F8CECC", icon: "💎" },
  { name: "Meaning", color: "#F8CECC", icon: "💬" },

  // Implementation & Migration
  { name: "Work Package", color: "#FDE9D9", icon: "📦" },
  { name: "Deliverable", color: "#FDE9D9", icon: "🎁" },
  { name: "Plateau", color: "#FDE9D9", icon: "🗺" },
  { name: "Gap", color: "#FDE9D9", icon: "🕳" },
  { name: "Implementation Event", color: "#FDE9D9", icon: "📅" },

  // Physical
  { name: "Facility", color: "#E6D5C3", icon: "🏢" },
  { name: "Equipment", color: "#E6D5C3", icon: "🔧" },
  { name: "Distribution Network", color: "#E6D5C3", icon: "🌐" },
  { name: "Material", color: "#E6D5C3", icon: "📦" },

  // Generic
  { name: "Grouping", color: "#FFFFFF", icon: "🗂" },
  { name: "Location", color: "#FFFFFF", icon: "📍" }
];
