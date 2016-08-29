export const fetchBenches = (filters, success) => (
  $.ajax({
    type: "GET",
    url: "/api/benches",
    data: filters,
    success: success,
    error: () => console.log('error occurred while fetching benches')
  })
);

export const createBench = (bench, success) => (
  $.ajax({
    type: "POST",
    url: "api/benches",
    data: bench,
    success: success,
    error: () => console.log('error occured while posting bench')
  })
);
