import { default as date }  from './date';
import { o }                from 'hslayout';


o.spec("date", () => {
	o('should have date defined as a function', () => {
		o(date).notEquals(undefined);
		o(typeof date).equals('function');
	});
  
	o.spec('formatting of date 7/4/2010', () => {
		let d = new Date('7/4/2010');

		o('should convert "%YYYY-%MMMM-%DD"', () => {
			o(date("%YYYY-%MMMM-%DD", d)).equals("2010-July-04");
		});

		o('should convert "%YY%MMM%D %YY"', () => {
			o(date("%YY%MMM%D %YY", d)).equals("10Jul4 10");
		});

		o('should convert "%YY%MM%D %h:%m:%ss.%j"', () => {
			o(date("%YY%MM%D %h:%m:%ss.%j", d)).equals("10074 0:0:00.0");
		});

		o('should convert "%DDD, %YY%MM%DD %hh:%mm:%ss.%jj"', () => {
			o(date("%DDD, %YY%MM%DD %hh:%mm:%ss.%jj", d)).equals("Sun, 100704 00:00:00.00");
		});

		o('should convert "%DDDD, %YY%MM%DD %hh:%mm:%ss.%jjj"', () => {
			o(date("%DDDD, %YY%MM%DD %hh:%mm:%ss.%jjj", d)).equals("Sunday, 100704 00:00:00.000");
		});
	});
	
	o.spec('formatting of current date', () => {
		let now = new Date();
		
		o('should format ' + now.toDateString(), () => {
			o(date("%YYYY-%MM-%DD")).equals(date("%YYYY-%MM-%DD", now));
		});
	});
});
