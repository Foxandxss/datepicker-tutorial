import { CalendarPipe } from './calendar.pipe';

describe('CalendarPipe', () => {
  let pipe: CalendarPipe;

  beforeEach(() => {
    pipe = new CalendarPipe();
  });

  it('transforms 2021/06 to "June of 2021"', () => {
    expect(pipe.transform('2021/06')).toBe('June of 2021');
  });

  it('transforms 2040/8 to "August of 2040"', () => {
    expect(pipe.transform('2040/8')).toBe('August of 2040');
  });

  it('transforms 2021 to "Unknown date"', () => {
    expect(pipe.transform('2021')).toBe('Unknown Date');
  });
});
