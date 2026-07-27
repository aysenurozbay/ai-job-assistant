import { careerProfile } from "@/config/profile";

export function ProfileSummary() {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">{careerProfile.name}</h2>

      <p className="text-muted-foreground">{careerProfile.title}</p>

      <p>Experience: {careerProfile.experienceYears} years</p>

      <div>
        Target roles:
        <ul className="list-disc ml-5">
          {careerProfile.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
