import { clsx } from 'clsx';

interface TeamSectionProps {
  isDarkMode: boolean;
}

export function TeamSection({ isDarkMode }: TeamSectionProps) {
  const teamMembers = [
    { name: 'Sarah Kim', role: 'Team Lead', score: 98, avatar: 'Sarah' },
    { name: 'James Wilson', role: 'Senior Installer', score: 92, avatar: 'James' },
    { name: 'Maria Garcia', role: 'Installer', score: 87, avatar: 'Maria' },
    { name: 'Alex Chen', role: 'Installer', score: 85, avatar: 'Alex' },
  ];

  return (
    <div className={clsx(
      'rounded-2xl p-6',
      isDarkMode ? 'bg-surface-800' : 'bg-white'
    )}>
      <h3 className="font-display text-lg mb-6">Team Performance</h3>
      <div className="space-y-4">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex items-center gap-3">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.avatar}&backgroundColor=b6e3f4`}
              alt={member.name}
              className="w-10 h-10 rounded-xl"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className={clsx(
                    'text-sm',
                    isDarkMode ? 'text-surface-200' : 'text-surface-700'
                  )}>{member.role}</p>
                </div>
                <span className="text-primary-500 font-medium">{member.score}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-surface-200">
                <div 
                  className="h-full rounded-full bg-primary-500"
                  style={{ width: `${member.score}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}