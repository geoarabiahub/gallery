import { ScanParameters } from '@/types/Sample';

interface ParametersTableProps {
  parameters: ScanParameters;
}

const ParametersTable = ({ parameters }: ParametersTableProps) => {
  const parameterEntries = Object.entries(parameters).map(([key, value]) => ({
    label: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
    value
  }));

  return (
    <div className="bg-muted/30 rounded-lg p-6">
      <h3 className="font-semibold text-foreground mb-4 text-lg">Scan Parameters</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {parameterEntries.map(({ label, value }) => (
          <div key={label} className="flex flex-col space-y-1">
            <span className="text-sm font-medium text-muted-foreground">{label}</span>
            <span className="text-foreground font-mono text-sm bg-card p-2 rounded border">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParametersTable;