export class EventVersion {
  constructor(
    public Id : Number,
    public EventCode: string,
    public SourceSystemCode: string,
    public SourceEntity: string,
    public FilterCriteria: string,
    public isActive: string,
    public StartDate: Date,
    public EndDate: Date,
    public Comments: string,
    public CreateBy: string,
    public UpdateBy: string) { }
}


