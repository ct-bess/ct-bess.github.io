/**
 * why did I do this? This is literally my npm install isOdd moment
 */
export const toFullMonth = ( shortHandMonth: string | number ): string => {
  switch( shortHandMonth ) {
    case 0:
    case "1":
    case "jan":
    case "Jan":
      return( "January" );
    case 1:
    case "2":
    case "feb":
    case "Feb":
      return( "Febuary" );
    case 2:
    case "3":
    case "mar":
    case "Mar":
      return( "March" );
    case 3:
    case "4":
    case "apr":
    case "Apr":
      return( "April" );
    case 4:
    case "5":
    case "may":
      return( "May" );
    case 5:
    case "6":
    case "jun":
    case "Jun":
      return( "June" );
    case 6:
    case "7":
    case "jul":
    case "Jul":
      return( "July" );
    case 7:
    case "8":
    case "aug":
    case "Aug":
      return( "August" );
    case 8:
    case "9":
    case "sep":
    case "Sep":
      return( "September" );
    case 9:
    case "10":
    case "oct":
    case "Oct":
      return( "October" );
    case 10:
    case "11":
    case "nov":
    case "Nov":
      return( "November" );
    case 11:
    case "12":
    case "dec":
    case "Dec":
      return( "December" );
    default:
      return( shortHandMonth + "" );
  }
}
