import { ScanParameters } from '@/types/Sample';

interface ParametersTableProps {
  parameters: ScanParameters;
}

const ParametersTable = ({ parameters }: ParametersTableProps) => {
  const parameterLabels: Record<string, string> = {
    dimension: 'Dimension',
    xrayCount: 'X-ray Count',
    pointSpacing: 'Point Spacing',
    acceleratingVoltage: 'Accelerating Voltage'
  };

  const parameterEntries = Object.entries(parameters).map(([key, value]) => ({
    label: parameterLabels[key] || key,
    value
  }));

  return (
    <div className="bg-muted/30 rounded-lg p-4">
      <h3 className="font-semibold text-foreground mb-3 text-lg">Scan Parameters</h3>
      <div className="grid grid-cols-2 gap-3">
        {parameterEntries.map(({ label, value }) => (
          <div key={label} className="flex flex-col space-y-1">
            <span className="text-sm font-medium text-muted-foreground">{label}</span>
            <span className="text-foreground font-mono text-sm bg-card px-2 py-1 rounded border">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParametersTable;