var count = 0;
// increase the count in one direction or the other
function changeCount(num)
{
  count += num;
  document.getElementById( 'count' ).innerHTML = count;
}