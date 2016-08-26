export const fetchBenches = (success) => (
  $.ajax({
    type: "GET",
    url: "/api/benches",
    success: success,
    error: () => console.log('error occurred while fetching benches')
  })
);
