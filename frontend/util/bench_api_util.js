export const fetchBenches = (filters, success) => (
  $.ajax({
    type: "GET",
    url: "/api/benches",
    data: filters,
    success: success,
    error: () => console.log('error occurred while fetching benches')
  })
);
